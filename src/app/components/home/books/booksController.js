angular.module('wbooks').controller('BooksController', [
  'booksService',
  'Popeye',
  'logged',
  'loginService',
  '$scope',
  function(booksService, Popeye, logged, loginService, $scope) {
    console.log(logged);
    this.books = [];
    booksService.getBooks().then((data) => this.books = data.data);
    this.filters = [
      { name: 'Seleccionar filtro', disabled: true, value: '1' },
      { name: 'Nombre', disabled: false, value: '2' },
      { name: 'Autor', disabled: false, value: '3' }
    ];
    this.actualFilter = this.filters[0].value;
    this.changeFilter = function(booksCtrl) {
      if (booksCtrl.actualFilter === '2') {
        booksCtrl.books.sort((a, b) => a.title > b.title);
      } else if (booksCtrl.actualFilter === '3') {
        booksCtrl.books.sort((a, b) => a.author > b.author);
      }
    };
    this.textInput = '';
    this.placeholderSearch = 'Buscar...';
    this.register = {};
    this.login = {};
    this.checkLogin = function() {
      logged = loginService.checkLogin().then((data) => console.log(data), (error) => console.log(error));
    }
    this.registerModal = function() {
      this.register = Popeye.openModal({
        templateUrl: '../app/components/home/register/register.html',
        controller: 'RegisterController as regCtrl',
        containerClass: 'register-modal-container',
        scope: $scope,
        keyboard: false
      });
    };
    this.loginModal = function() {
      this.checkLogin();
      console.log(logged);
      this.login = Popeye.openModal({
        templateUrl: '../app/components/home/login/login.html',
        controller: 'LoginController as logCtrl',
        containerClass: 'login-modal-container',
        scope: $scope,
        keyboard: false
      });
    };
    this.submitSearch = () => this.loginModal();
  }
]);
