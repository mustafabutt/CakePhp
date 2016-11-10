(function (app) { 
                                 app.teacherListComponent = ng.Component({}).  
                                 View({ 
                                 templateUrl: "app/components/teacher/teacher-list.html", 
                                 directives : [ng.NgFor]
                                 }).
                                 Class({ 
                                 constructor: [app.teacherService ,function (teacherService) { 
                                 teacherService.getList().subscribe(function (data) { 
                                 this.list = data; 
                                  }.bind(this));
                                 }] 
                                 }); 
                                 })(this.app); 
  