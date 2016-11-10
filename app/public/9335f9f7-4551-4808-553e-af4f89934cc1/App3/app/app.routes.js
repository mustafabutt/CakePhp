(function () {
    'use strict';
    angular.module('App3').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "app/components/app/app-home.html",
                    controller: 'appHomeCtrl',
                    controllerAs: 'vm'
                })
            .state('login', {
                url: "/login",
                templateUrl: "app/components/app/app-login.html",
                controller: 'appLoginCtrl',
                controllerAs: 'vm'
            })
.state('user-list', { url: "/user", templateUrl: "app/components/user/user-list.html", controller: 'userListCtrl', controllerAs: 'vm' })


.state('user-new', { url: "/user/new", templateUrl: "app/components/user/user-create.html", controller: 'userCreateCtrl', controllerAs: 'vm' })


.state('user-details', { url: "/user/:id", templateUrl: "app/components/user/user-details.html", controller: 'userDetailsCtrl', controllerAs: 'vm' })


.state('user-edit', { url: "/user/edit/:id", templateUrl: "app/components/user/user-edit.html", controller: 'userEditCtrl', controllerAs: 'vm' })


.state('user-delete', { url: "/user/delete/:id", templateUrl: "app/components/user/user-delete.html", controller: 'userDeleteCtrl', controllerAs: 'vm' })


    });
})();
