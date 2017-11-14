angular.module('wbooks').controller('BooksController', [
  'booksService',
  '$translate',
  function(booksService, $translate) {
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

    this.submitSearch = () => console.log(this.books);

    this.filters = [
      { name: $translate.instant('SELECT_FILTER'), disabled: true, value: '1' },
      { name: $translate.instant('NAME'), disabled: false, value: '2' },
      { name: $translate.instant('AUTHOR'), disabled: false, value: '3' }
    ];
    this.actualFilter = this.filters[0].value;
    this.textInput = '';
  }
]);
