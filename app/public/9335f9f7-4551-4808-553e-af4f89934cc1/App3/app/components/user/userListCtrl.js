(function () { 
 				    var app = angular.module("App3");
 				    app.controller("userListCtrl", ["userService", function (userService) { 
 				    var vm = this;  
 				    userService.query({},function (list, headers) { 
 				    vm.list = list; 
 				     }); 
 				    }]);
 				    })();