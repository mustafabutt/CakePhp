angular.module('App3')
.controller('appLoginCtrl', function (auth, $location, store, $modal, $rootScope) {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $rootScope.hideHeader = true;
    var vm = this;
    vm.login = function () {
        auth.signin({
            closable: false,
            disableResetAction: true,
            socialBigButtons: true
        }, function (profile, token) {
            store.set('profile', profile);
            store.set('token', token);
            console.log('profile', profile);
            //$location.path("/");
        }, function (error) {
            console.log("There was an error logging in", error);
        });

    };
    vm.openLoginModal = function (size) {

        var modalInstance = $modal.open({
            animation: false,
            templateUrl: 'userLoginModal.html',
            controller: 'userLoginModalCtrl',
            controllerAs: 'vm',
            backdrop : 'static',
            keyboard:false,
            size: size,
            resolve: {
               
            }
        });

        modalInstance.result.then(function (selectedItem) {
            
        }, function () {
           
        });
    };
    vm.openLoginModal('md');
}).controller('userLoginModalCtrl', function (auth, $modalInstance, store, $rootScope, $location, $http) {
    $rootScope.profile = 'asdasd';
    console.log('userLoginModalCtrl called');
    var vm = this;
    vm.ok = function () {

    };
    vm.login = function () {
        var username = vm.username;
        var password = vm.password;
        var url = 'http://localhost:3000/users?username=' + username + '&password=' + password;
        $http.get(url).
              then(function (response) {
                  // this callback will be called asynchronously
                  // when the response is available
                  var token = 'db';
                  if (response.data.length > 0)
                      onLoginSuccess(response.data[0], token);
                  else onLoginFailed(response, token);
              }, function (response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  onLoginFailed(response, token);
              });
    }

    vm.socialLogin = function (type) {
        vm.loading = true;
        auth.signin({
            popup: true,
            connection: type,
            scope: 'openid name email'
        }, onLoginSuccess, onLoginFailed);
    }
    function onLoginSuccess(profile, token) {
        //$scope.message.text = '';
        console.log('login success profile', profile);
        store.set('profile', profile);
        store.set('token', token);
        $rootScope.profile = profile;
        $rootScope.token = token;
        $modalInstance.close('');
        $rootScope.hideHeader = false;
        $location.path('/');
        vm.loading = false;

    }
    function onLoginFailed(error) {
        //$scope.message.text = 'invalid credentials';
        vm.loading = false;
        console.log('Failed to login', error);
    }
});
