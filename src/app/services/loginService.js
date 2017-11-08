angular.module('wbooks').service('loginService', [
  '$http',
  function($http) {
    this.login = function(email, password) {
      return $http.post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
        email,
        password
      });
    };
  }
]);
