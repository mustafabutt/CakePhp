(function (app) { 
                                 app.teacherDetailsComponent = ng.Component({}).  
                                 View({ 
                                 templateUrl: "app/components/teacher/teacher-details.html", 
                                 directives : [ng.NgFor]
                                 }).
                                 Class({ 
                                 constructor: [app.teacherService ,ngRouter.RouteParams ,function (teacherService,params) { 
                                 this.newItem = {}; 
                                 teacherService.getOne(params.get("id")).subscribe(function(response){ 
                                 this.item=response;
                                 }.bind(this)); 
                                 }] 
                                 }); 
                                 })(this.app); 