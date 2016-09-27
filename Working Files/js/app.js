var allData= angular.module("allData", ["ngRoute"]);
    allData.config(function($routeProvider){
        $routeProvider
            .when('/',{
				templateUrl:"index.html"
			})
			.when('/landing',{
				templateUrl:'landing.html'
			})
	});