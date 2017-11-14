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
      return $http.get(api + '/users/me');
    };
    this.getOtherUserInfo = function(id) {
      return $http.get(api + '/users/' + id)
    };
    this.getComments = function(user_id) {
      return $http.get(api + '/users/'+user_id+'/comments');
    };
    this.getRentedBooks = function(user_id) {
      return $http.get(api + '/users/'+user_id+'/rents');
    };
  }
]);
