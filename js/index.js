//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl',function($scope){
  $scope.data=[
        [
            "401",
            "Mikkel von Bobslæde",
            "32",
            "311BUT",
            "80 44 84 47",
            "Nej"
        ],
    ]

$scope.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
});