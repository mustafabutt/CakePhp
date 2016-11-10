(function () { 
 				    var app = angular.module("App3");
 				    app.controller("userCreateCtrl", ["userService", "$location",function (userService,$loaction) { 
 				    var vm = this;  
 				    vm.addNew = function () { 
 				    userService.save(vm.newItem, function (result) { 
 				    $location.path("/user"); 
 				     }); 
 				 } 
 				    }]);
 				    })();