angular.module('wbooks').controller('BooksController', [
  'booksService',
  'sessionService',
  'Popeye',
  '$scope',
  '$state',
  function(booksService, sessionService, Popeye, $scope, $state) {
    this.books = [];
    this.register = {};
    this.login = {};

    booksService.getBooks().then((data) => this.books = data.data);
    
    this.registerModal = function() {
      if (sessionService.loginState() === false) {
        $state.go('home.register');
        this.register = Popeye.openModal({
          templateUrl: '../app/components/home/register/register.html',
          controller: 'RegisterController as regCtrl',
          containerClass: 'register-modal-container',
          scope: $scope,
          keyboard: false
        });
      } else {
        $state.go('home');
      }
    };
    
    this.loginModal = function() {
      if (sessionService.loginState() === false) {
        $state.go('home.login');
        this.login = Popeye.openModal({
          templateUrl: '../app/components/home/login/login.html',
          controller: 'LoginController as logCtrl',
          containerClass: 'login-modal-container',
          scope: $scope,
          keyboard: false
        });
        this.login.closed.then(function() {
          $state.go('home');
        });
      } else {
        $state.go('home');
      }
    };
    
    this.checkLogged = function() {
      return false;
    };

    this.changeFilter = function(booksCtrl) {
      if (booksCtrl.actualFilter === '2') {
        booksCtrl.books.sort((a, b) => a.title > b.title);
      } else if (booksCtrl.actualFilter === '3') {
        booksCtrl.books.sort((a, b) => a.author > b.author);
      }
    };

    this.submitSearch = () => this.loginModal();

    this.filters = [
      { name: 'Seleccionar filtro', disabled: true, value: '1' },
      { name: 'Nombre', disabled: false, value: '2' },
      { name: 'Autor', disabled: false, value: '3' }
    ];
    this.actualFilter = this.filters[0].value;
    this.textInput = '';
  }
]);
