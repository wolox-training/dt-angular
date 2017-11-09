angular.module('wbooks').service('wishlistService', [
  '$http',
  function($http) {
    const api = 'https://wbooks-api-stage.herokuapp.com/api/v1';
    this.addBook = function(book_id, user_id) {
      return $http.post(api + '/users/'+user_id+'/wishes', {book_id, user_id});
    };
    this.getWishlist = function(user_id) {
      return $http.get(api + '​/users/'+user_id+'/wishes');
    };
  }
]);
