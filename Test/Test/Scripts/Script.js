/// <reference path="angular.min.js"/>

var demoApp = angular.module("demoApp", [])
    .controller("countryController", function ($scope, $http, $location, $anchorScroll) {
        $http({
            method: 'GET',
            url: 'CountryServices.asmx/GetData'
        })
            .then(function (response) {
                $scope.countries = response.data;
            });

        $scope.scrollTo = function (countryName) {
            $location.hash(countryName);
            $anchorScroll();
        }
    });

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "USA",
            capital: "Washington, D.C.",
            flag: "Images/usa-flag.png"
        }
        $scope.message = "Hello Angular!!!";
        $scope.country = country;
    })

    .controller("dbController", function ($scope, $http, $log) {

        var successCallback = function (response) {
            $scope.dbEmployees = response.data;
        };

        var errorCallback = function (response) {
            $scope.error = response.data;
        }
        $http({
            method: 'GET',
            url: 'EmployeeService.asmx/GetAllEmployees'
        })
            .then(successCallback, errorCallback);
    })

    .controller("empController", function ($scope) {
        var employee = [
            { firstName: "gaurav", lastName: "lad", gender: 1, salary: 1233231.39, dateOfBirth: new Date("November 23, 1980"), city: "London" },
            { firstName: "rajat", lastName: "gupta", gender: 2, salary: 456323.1, dateOfBirth: new Date("May 23, 2000"), city: "London" },
            { firstName: "raghu", lastName: "manaava", gender: 2, salary: 789.31, dateOfBirth: new Date("July 23, 1988"), city: "Pune" },
            { firstName: "umang", lastName: "mishra", gender: 1, salary: 12.23, dateOfBirth: new Date("January 01, 1990"), city: "Chennai" },
            { firstName: "dhaval", lastName: "patel", gender: 1, salary: 345.20, dateOfBirth: new Date("November 03, 1980"), city: "India" }
        ];
        $scope.employee = employee;
        $scope.sortColumn = "firstName";
        $scope.reverseSort = false;
        $scope.employeeView = "EmployeeTable.html";
        $scope.sortData = function (column){
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = function (column){
            if($scope.sortColumn == column){
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
        }
        $scope.search = function (item){
            if($scope.searchText == undefined){
                return true;
            }
            else{
                if(item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1){
                    return true;
                }
            }
            return false;
        }
        $scope.rowLimit = 3;
        var countries = [
            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Manchester" },
                    { name: "Birmingham" },
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" },
                ]
            },
            {
                name: "India",
                cities: [
                    { name: "Pune" },
                    { name: "Mumbai" },
                    { name: "Burhanpur" },
                ]
            },
        ];
        $scope.countries = countries;
    })
    .controller("technologies", function ($scope) {
        var technologies = [
            {name: "Java", likes: 0, dislikes: 0},
            {name: "JavaScript", likes: 0, dislikes: 0},
            {name: "Android", likes: 0, dislikes: 0},
            {name: "MySQL", likes: 0, dislikes: 0}
        ];
        $scope.technologies = technologies;
        $scope.incrementLikes = function(technology){
            technology.likes++;
        }
        $scope.incrementDislikes = function(technology){
            technology.dislikes++;
        }
    });


// var myController = function($scope){
//     $scope.message = "AngularJS Tutorial";
// };

// myApp.controller("myController", function($scope){
//     var employee = {
//         firstName: "Gaurav",
//         lastName: "Lad",
//         gender: "Male"
//     };
//     $scope.employee = employee;
// });

myApp.controller("yourController", function ($scope) {
    $scope.message = "your training";
})