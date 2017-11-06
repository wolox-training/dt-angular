angular.module('wbooks').controller('RegisterController', ['$state', function($state) {
  this.sendRegistration = function() {
    $state.go('home.login');
  };
}]);
