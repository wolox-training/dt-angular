angular.module('wbooks').controller('LoginController', [
  'loginService',
  'sessionService',
  '$state',
  function(loginService, sessionService, $state) {
    this.email = '';
    this.pass = '';
    this.error = '';
    this.sendLogin = function(logCtrl) {
      loginService.login(this.email, this.pass).then(
        function(data) {
          sessionService.setUserInfo(data.data);
          $state.go('^', {}, { reload: true });
        }, function(error) {
          logCtrl.error = error.data.error;
        }
      );
    };
  }
]);
