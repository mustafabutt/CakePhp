(function (app) { 
                                 app.teacherCreateComponent = ng.Component({}).  
                                 View({ 
                                 templateUrl: "app/components/teacher/teacher-create.html", 
                                 directives : [ng.NgFor,ng.FORM_DIRECTIVES]
                                 }).
                                 Class({ 
                                 constructor: [app.teacherService ,ngRouter.Router ,function (teacherService,router) { 
                                 this.newItem = {}; 
                                 this.addNew = function(){ 
                                 teacherService.add(this.newItem).then(function(response){ 
                                 router.parent.navigate("/teacher");
                                 }); 
                                 } 
                                 }] 
                                 }); 
                                 })(this.app); 