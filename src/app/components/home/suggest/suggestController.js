angular.module('wbooks').controller('SuggestController', ['$state', 'booksService', function($state, booksService) {
  this.name = '';
  this.author = '';
  this.price = '';
  this.year = '';
  this.editorial = '';
  this.link = '';
  this.send = function() {
    booksService.addBook(this.name, this.author, this.link).then((data) => {
      $state.go('home', {}, { reload: true });
    });
  };
}]);
