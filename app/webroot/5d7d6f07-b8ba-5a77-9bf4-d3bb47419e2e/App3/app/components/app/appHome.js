(function (app) { 
                                 app.HomeComponent = ng.Component({}).  
                                 View({ 
                                 templateUrl: "app/components/app/app-home.html", 
                                 directives : [ng.NgFor,ng.FORM_DIRECTIVES]
                                 }).
                                 Class({ 
                                 constructor: [ngRouter.Router,function (router) { 
                                 }] 
                                 }); 
                                 })(this.app); 
  