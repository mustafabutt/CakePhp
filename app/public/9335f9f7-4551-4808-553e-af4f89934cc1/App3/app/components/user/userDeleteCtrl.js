(function () { 
 				    var app = angular.module("App3");
 				    app.controller("userDeleteCtrl", ["userService", "$location","$stateParams",function (userService,$loaction,params) { 
 				    var vm = this;  
 				    userService.get({ Id: params.id }, function (item) { 
 				      vm.deleteItem = item; 
 				    }); 
 				    vm.delete = function () { 
 				    userService.delete({ Id: params.id }, function (result) { 
 				    $location.path("/user");
 				    }); 
 				    } 
 				    }]); 
 				    })(); 
  