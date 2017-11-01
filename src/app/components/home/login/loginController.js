angular.module('wbooks').controller('LoginController', [
  'loginService',
  '$http',
  function(loginService, $http) {
    this.email = '';
    this.pass = '';
    this.error = '';
    this.sendRegistration = function(logCtrl, booksCtrl) {
      loginService.login(this.email, this.pass).then(
        function(data) {
          console.log(data);
          console.log($http.defaults.headers.common);
          $http.defaults.headers.common.access_token = data.data.access_token;
          $http.defaults.headers.common.renew_id = data.data.renew_id;
          booksCtrl.login.close();
        }, function(error) {
          console.log(error);
          logCtrl.error = error.data.error;
        }
      );
    };
  }
]);
