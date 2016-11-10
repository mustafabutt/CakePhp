(function () { 
 				    var app = angular.module("App3");
 				    app.controller("userDetailsCtrl", ["userService","$stateParams",function (userService,params) { 
 				    var vm = this;  
 				    userService.get({ Id: params.id }, function (item) { 
 				     vm.item = item; 
 				    }); 
 				    }]); 
 				    })(); 