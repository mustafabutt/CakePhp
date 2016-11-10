(function () {
    'use strict';
    angular.module('App3', [
        'ui.bootstrap',
        'auth0',
        'angular-storage',
        'angular-jwt',
        //'angular-loading-bar',

        'ngResource',
        'ui.router'

    ]).config(function (authProvider, $httpProvider, $locationProvider, jwtInterceptorProvider) {
        authProvider.init({
            domain: 'example.auth0.com',
            clientID: 'sadasdasd',
            loginUrl: '/login'
        });
        jwtInterceptorProvider.tokenGetter = function (store) {
            return store.get('token');
        }

        // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
        // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
        // want to check the delegation-token example
        $httpProvider.interceptors.push('jwtInterceptor');
    })
        
        .run(function ($rootScope, auth, store, jwtHelper, $location) {
            
            //$rootScope.$on('$locationChangeStart', function () {
                
            //    if (!auth.isAuthenticated) {
            //        var token = store.get('token');
            //        if (token) {
            //            if (token == 'db' || !jwtHelper.isTokenExpired(token)) {
            //                if(token!='db')
            //                    auth.authenticate(store.get('profile'), token);
            //                $rootScope.profile = store.get('profile');
            //                $rootScope.token = store.get('token');
            //            } else {
            //                $location.path('/login');
            //            }
            //        }
            //        else {
            //            $location.path('/login');
            //        }
            //    }

            //});
        });
})();
