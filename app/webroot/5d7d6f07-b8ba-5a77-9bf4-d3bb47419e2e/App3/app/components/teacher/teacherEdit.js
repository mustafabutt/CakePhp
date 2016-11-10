(function (app) { 
                                 app.teacherEditComponent = ng.Component({}).  
                                 View({ 
                                 templateUrl: "app/components/teacher/teacher-edit.html", 
                                 directives : [ng.NgFor,ng.FORM_DIRECTIVES]
                                 }).
                                 Class({ 
                                 constructor: [app.teacherService ,ngRouter.RouteParams,ngRouter.Router ,function (teacherService,params,router) { 
                                 this.editItem = {}; 
                                 teacherService.getOne(params.get("id")).subscribe(function (data) { 
                                 	this.editItem = data; 
                             }.bind(this)); 
                             this.save = function(){ 
                                 teacherService.save(this.editItem).then(function(response){ 
                                 router.parent.navigate("/teacher");
                                 }); 
                                 } 
                                 }] 
                             }); 
                                 })(this.app); 