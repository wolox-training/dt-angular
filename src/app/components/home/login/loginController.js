angular.module('wbooks').controller('LoginController', [
  'loginService',
  'sessionService',
  '$http',
  function(loginService, sessionService, $http) {
    this.email = '';
    this.pass = '';
    this.error = '';
    this.sendRegistration = function(logCtrl, booksCtrl) {
      loginService.login(this.email, this.pass).then(
        function(data) {
          sessionService.setUserInfo(data.data);
          booksCtrl.login.close();
        }, function(error) {
          console.log(error);
          logCtrl.error = error.data.error;
        }
      );
    };
  }
]);
