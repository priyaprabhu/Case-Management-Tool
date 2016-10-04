allData.controller('formcontroller', function($scope,$http){
	$scope.inputdisabled=false;
	$scope.distanceValue=["Miles","KiloMeters"];
	$scope.vehicle;
	//$scope.url="http://172.27.10.244:443/ebrs/customer/getInfoByCOMPNM?value=Test Company";
	
	$http.get("../../js/transmission.json")
         .then(function(response) {
        //First function handles success
        $scope.content = response;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
	
	//172.27.10.244 port:443
	
});
