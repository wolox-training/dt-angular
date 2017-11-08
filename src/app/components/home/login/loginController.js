angular.module('wbooks').controller('LoginController', [
  'loginService',
  'sessionService',
  '$http',
  '$state',
  function(loginService, sessionService, $http, $state) {
    this.email = '';
    this.pass = '';
    this.error = '';
    this.sendLogin = function(logCtrl) {
      loginService.login(this.email, this.pass).then(
        function(data) {
          sessionService.setUserInfo(data.data);
          $state.go('^',{},{reload: true});
        }, function(error) {
          console.log(error);
          logCtrl.error = error.data.error;
        }
      );
    };
  }
]);
