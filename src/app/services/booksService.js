angular.module('wbooks').service('booksService', [
  '$http',
  function($http) {
    const api = 'https://wbooks-api-stage.herokuapp.com/api/v1';
    this.getBooks = function() {
      return $http.get(`${api}/books`);
    };
    this.getRentStatus = function(id) {
      return $http.get(`${api}/books/${id}/rents`);
    }
    this.getSugestions = function(book_id) {
      return $http.get(`https://wbooks-api-stage.herokuapp.com/api/v1/books/${book_id}/suggestions`);
    };
    this.getComments = function(book_id) {
      return $http.get(`${api}/books/${book_id}/comments`);
    };
    this.addComment = function(book_id, user_id, content) {
      return $http.post(`${api}/books/${book_id}/comments`,{ book_id, user_id, content });
    };
    this.addBook = function(title, author, link) {
      return $http.post(`${api}/book_suggestions`,{ title,author,link });
    }
  }
]);
