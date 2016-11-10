(function () { 
 				    var app = angular.module("App3");
 				    app.controller("userEditCtrl", ["userService", "$location","$stateParams",function (userService,$loaction,params) { 
 				    var vm = this;  
 				    userService.get({ Id: params.id }, function (item) { 
 				      vm.editItem = item; 
 				    }); 
 				    vm.save = function () { 
 				    	var item = vm.editItem; 
 				    userService.update({ Id: params.id },item, function (result)  {});
 				    $location.path("/user");
 				    } 
 				    }]); 
 				    })(); 
  