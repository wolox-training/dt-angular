angular.module('wbooks').controller('BooksController', [
  'booksService',
  function(booksService) {
    this.books = [];
    this.register = {};
    this.login = {};

    booksService.getBooks().then((data) => this.books = data.data);
    
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

    this.submitSearch = () => {};

    this.filters = [
      { name: 'Seleccionar filtro', disabled: true, value: '1' },
      { name: 'Nombre', disabled: false, value: '2' },
      { name: 'Autor', disabled: false, value: '3' }
    ];
    this.actualFilter = this.filters[0].value;
    this.textInput = '';
  }
]);
