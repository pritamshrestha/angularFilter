// connecting the angular module with the angular app
var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
var employees=[{name:"Pritam",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:55000.788},
               {name:"Suchana",dateOfBirth:new Date("january 23,1986"),gender:"FeMale",salary:85000.788},
               {name:"Prisumsa",dateOfBirth:new Date("August 30,2012"),gender:"FeMale",salary:5000.78},
               {name:"Pratima",dateOfBirth:new Date("August 31,2010"),gender:"FeMale",salary:15000.78},
               {name:"Pratima",dateOfBirth:new Date("december 30,2012"),gender:"FeMale",salary:501000.78},
               {name:"Netra",dateOfBirth:new Date("april 30,2000"),gender:"Male",salary:5000.78},
               {name:"Madav",dateOfBirth:new Date("August 3,1977"),gender:"Male",salary:235000.78}
   
 ]
     // this is for the scope
   $scope.employees=employees;
   $scope.rowLimit=3;
});
