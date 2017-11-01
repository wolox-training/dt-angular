angular.module('wbooks').controller('RegisterController', [function() {
  this.sendRegistration = function(BooksController) {
    BooksController.loginModal();
  };
}]);
