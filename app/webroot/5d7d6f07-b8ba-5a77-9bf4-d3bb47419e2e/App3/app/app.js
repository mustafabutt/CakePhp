(function (ng, ngRouter, app) { 
                                 app.Main = ng.Component({
                                 selector: "my-app" 
                                 }).  
                                 View({ 
                                 templateUrl: "app/app.html", 
                                  directives: [ngRouter.routerDirectives,ng.NgIf] 
                                 }).
                                 Class({ 
                                     constructor: [ngRouter.Router,function (router) {
                                     var _this = this; 
                                     this.profile = typeof localStorage.profile !== "undefined" ? JSON.parse(localStorage.profile) : {}; 
                                    this.hideHeader = router.lastNavigationAttempt == "/login";
                                    document.addEventListener("app.HideHeader", function (e) { 
                                    _this.hideHeader = true; 
                                     }, false); 
                                     document.addEventListener("app.OnLogin", function (e) {
                                   	_this.profile = JSON.parse(localStorage.profile); 
                                     _this.hideHeader = false;  
                                     }, false); 
                                     }]  
                                     	}); 
                                     })(window.ng, window.ngRouter, window.app); 
  