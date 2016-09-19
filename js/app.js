var allData= angular.module('allData', ['ngRoute']);
    allData.config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:"caseManagement/index.html"
            })
    });