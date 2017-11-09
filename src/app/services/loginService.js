angular.module('wbooks').service('loginService', [
  '$http',
  function($http) {
    const api = 'https://wbooks-api-stage.herokuapp.com/api/v1';
    this.login = function(email, password) {
      return $http.post(api+'/users/sessions', {
        email,
        password
      });
    };
    this.getUserInfo = function() {
      return {
        name: 'Anonymus',
        image: '',
        id: '1'
      };
    };
  }
]);
