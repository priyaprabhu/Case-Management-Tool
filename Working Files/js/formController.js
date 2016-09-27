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
	
	
	//172.27.10.244 port:443
	
});
