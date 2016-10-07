allData.controller('formcontroller', function($scope, $http){
	$scope.inputdisabled=false;
	$scope.distanceValue=["Miles","KiloMeters"];
	$scope.vehicle="";
	$scope.url="https://172.27.10.73:8443/ebrs/catalog/";
	$scope.transmissionValues=[];
	$scope.hvacValues=[];
	$scope.odameterValues=[];
	$scope.systemValues=[];
	
	$scope.dataControl=[];
	
	$scope.fetchData=function(){
		
		//Transmission
		$http.get($scope.url+'transmissiontypes')
        .then(function(response) {
      	  $scope.loadResponse = response.data;
      	  angular.forEach($scope.loadResponse, function(value){
      		  $scope.transmissionValues.push({"Label":value.transmissionTypeRefLbl, "Value":value.transmissionTypeRefCd });
      	  });
   }, function(response) {
  	 $scope.data = "Error in transmission types";
   });
		//HVAC
		$http.get($scope.url+'hvactypes')
        .then(function(response) {
      	  $scope.loadResponse = response.data;
      	  angular.forEach($scope.loadResponse, function(value){
      		  $scope.hvacValues.push({"Label":value.hvacTypeLbl, "Value":value.hvacTypeRefCd });
      	  });
   }, function(response) {
  	 $scope.data = "Error in HVAC";
   });
		
		//Odameter Ranges
		$http.get($scope.url+'odometerranges')
        .then(function(response) {
      	  $scope.loadResponse = response.data;
      	  angular.forEach($scope.loadResponse, function(value){
      		  $scope.odameterValues.push({"Label":value.odometerRangeRefLbl, "Value":value.odometerRangeRefCd });
      	  });
      	 
   }, function(response) {
  	 $scope.data = "Error in Odameter";
   });
		//Systems
		$http.get("https://172.27.10.73:8443/ebrs/systems")
        .then(function(response) {
      	  $scope.loadResponse = response.data;
      	  angular.forEach($scope.loadResponse, function(value){
      		  $scope.systemValues.push({"Label":value.valueLbl, "Value":value.troubleSymptomId });
      	  });
      	 
   }, function(response) {
  	 $scope.data = "Error in Systems";
   });
	};
/*	
	
	$scope.getOptions=function(value){
		$scope.dataControl.push(value);
		
};*/

$scope.getSystem=function(value){
	var systemValue=value.Value;
	$scope.symptomValues=[];
	var url="https://172.27.10.73:8443/ebrs/systems/"
		$http.get(url+systemValue)
        .then(function(response) {
      	  $scope.loadResponse = response.data;
      	$scope.symptomValues.push({"Label":$scope.loadResponse.valueLbl, "Value":$scope.loadResponse.troubleSymptomClassRefCd });
      	$scope.symValues=$scope.symptomValues[0];
      	}, function(response) {
  	 $scope.data = "Something went wrong";
   });
};

$scope.getNameforData=function(value){
	var url="https://172.27.10.73:8443/ebrs/systems/customer/getInfoByCOMPNM?value=";
	$http.get(url+value)
    .then(function(response) {
  	  $scope.loadResponse = response.data;
  	  console.log($scope.loadResponse);
  	}, function(response) {
	 $scope.data = "Something went wrong";
});
};

$scope.fetchData();

//input validation

$scope.change = function (){
    var Vin = $scope.vin;
    if(Vin){
        var alphaNumeric = Vin.replace(/[^a-zA-Z0-9]/g,'');
        if(alphaNumeric  !== Vin){
            $scope.vin= alphaNumeric;
        }
    }
};
	
	//172.27.10.244 port:443 http://<<server path>>:<<server port>>/ebrs/customer/getInfoByCOMPNM?value=Test Company
	
});



allData.directive('phoneInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('tel')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0,10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            $element.bind('keydown', function(event) {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                    return;
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', function() {
                $browser.defer(listener);
            });
        }

    }
});


