(function (app) { 
                                 app.LoginComponent = ng.Component({}).View({
                                 templateUrl: "app/components/app/app-login.html", 
                                 directives : [ng.NgFor,ng.FORM_DIRECTIVES] }).  
                                 Class({ 
                                 constructor: [ngRouter.Router,function (router) { 
                                 document.dispatchEvent(new Event("app.HideHeader",{hideHeader:true})); 
                                 var vm = this;
                                 vm.login = function(){ } 
                                     vm.login = function () {
                                     var username = vm.username; 
                                     var password = vm.password; 
                                     var url = "http://localhost:3000/users?username=" + username + "&password=" + password;
                                     window.fetch(url).then(function (response,d) { 
                                     if (response.status !== 200) { 
                                     return; 
                                     }
                                   	else { 
                                     response.json().then(function(data) {  
                                     if (data.length > 0) 
                                     onLoginSuccess(data[0]);  
                                     	}); 
                                     } 
                                     	}) 
                                     } 
                                     vm.socialLogin = function(type){ 
                                   auth0.login({
                                     	connection: type, 
                                     popup: true, 
                                     popupOptions: { 
                                     	width: 450, 
                                     height: 800, } 
                                     }, function(err, profile, id_token, access_token, state) { 
                                     	if (err) { 
                                     return; } 
                                	onLoginSuccess(profile); 
                             	}); 
                             	} 
                             	function onLoginSuccess(profile){ 
                             	vm.profile = profile; 
                             	localStorage.profile = JSON.stringify(profile); 
                             	var event = new Event("app.OnLogin"); 
                             	document.dispatchEvent(event); 
                             	router.parent.navigate("/home"); 
                             } 
                             	}] 
                             	}); 
                             	})(this.app); 