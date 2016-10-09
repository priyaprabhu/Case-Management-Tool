allData.controller('formcontroller', function($scope,$http){
	$scope.inputdisabled=false;
	$scope.distanceValue=["Miles","KiloMeters"];
	$scope.vehicle;
	$scope.url="http://172.27.10.244:443/ebrs/customer/getInfoByCOMPNM?value=Test Company";
	
	$http.get("D:\Working Files\js\transmission.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
		console.log($scope.myWelcome);
    });
	
	
  $scope.currencyVal;
$scope.change = function (){
    var Vin = $scope.vin;

    if(Vin){
        var alphaNumeric = Vin.replace(/[^a-zA-Z0-9]/g,'');
        //var alphaNumeric = uname.replace('/[a-zA-Z0-9^ ]/g','');
        
        if(alphaNumeric  !== Vin){
            $scope.vin= alphaNumeric;
        }
    }
}

    // Add new Row
    $scope.rows = ['Row 1'];
  
    $scope.counter = 3;
  
    $scope.addRow = function() {
        var lastRow = $scope.rows[$scope.counter-1];
        $scope.rows.pop();        
        $scope.rows.push('Row ' + $scope.counter);
        $scope.rows.push(lastRow);
        $scope.counter++;
    }   
	
	
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

    };
});
allData.filter('tel', function () {
    return function (tel) {
        console.log(tel);
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, 3);
                number = value.slice(3);
        }

        if(number){
            if(number.length>3){
                number = number.slice(0, 3) + '-' + number.slice(3,7);
            }
            else{
                number = number;
            }

            return ( city + "-" + number).trim();
        }
        else{
            return "" + city;
        }

    };

});