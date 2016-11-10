'use strict';

(function (ngRouter, app) {
    var routeConfigs = [];
    routeConfigs.push({ path: '/home', component: app.HomeComponent, as: 'home' });
    routeConfigs.push({ path: '/login', component: app.LoginComponent, as: 'login' });
    routeConfigs.push({ path: '/teacher', component: app.teacherListComponent, as: 'teacherList' });

    routeConfigs.push({ path: '/teacher/new',component: app.teacherCreateComponent, as: 'teacherCreate' });

    routeConfigs.push({ path: '/teacher/:id',component: app.teacherDetailsComponent, as: 'teacherDetails' });

    routeConfigs.push({ path: '/teacher/:id/edit',component: app.teacherEditComponent, as: 'teacherEdit' });

    routeConfigs.push({ path: '/teacher/:id/delete',component: app.teacherDeleteComponent, as: 'teacherDelete' });

    
    ngRouter.RouteConfig(routeConfigs)(app.Main);

})(window.ngRouter, window.app);
