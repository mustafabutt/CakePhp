(function () { 
 				    var app = angular.module("App3");
 				    var url = "http://localhost/CakePHP/butt/:Id"; 
 				    app.factory("userService", function ($resource) { 
 				    return $resource(url, null, 
 				    { 
 				    "update": { method:"PUT" 
 							} 
 						}); 
 					}); 
 				    })(); 