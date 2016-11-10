(function (app) { 
                                 app.teacherDeleteComponent = ng.Component({}).  
                                 View({ 
                                 templateUrl: "app/components/teacher/teacher-delete.html", 
                                 directives : [ng.NgFor,ng.FORM_DIRECTIVES]
                                 }).
                                 Class({ 
                                 constructor: [app.teacherService ,ngRouter.RouteParams,ngRouter.Router ,function (teacherService,params,router) { 
                                 this.deleteItem = {}; 
                                 teacherService.getOne(params.get("id")).subscribe(function (data) { 
                                 	this.deleteItem = data; 
                                     }.bind(this)); 
                             this.delete = function(){ 
                                 teacherService.delete(this.deleteItem).then(function(response){ 
                                 router.parent.navigate("/teacher");
                                 }); 
                                 } 
                                 }] 
                             }); 
                                 })(this.app); 