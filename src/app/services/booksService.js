angular.module('wbooks').service('booksService', [
  '$http',
  function($http) {
    const api = 'https://wbooks-api-stage.herokuapp.com/api/v1';
    this.getBooks = function() {
      return $http.get(api+'/books');
    };
    this.getRentStatus = function(id) {
      return $http.get(api+'/books/'+id+'/rents')
    }
    this.getSugestions = function() {
      return $http.get('assets/Sugestions.json');
    };
    this.getComments = function(book_id) {
      return $http.get(api + '/books/'+book_id+'/comments');
    };
    this.addComment = function(book_id, user_id, content) {
      console.log(content);
      return $http.post(api + '/books/'+book_id+'/comments',{book_id, user_id, content});
    };
  }
]);
