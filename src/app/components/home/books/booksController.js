angular.module('wbooks').controller('booksController',['booksService', '$state', function(booksService, $state){
    this.books = [];
    booksService.getBooks().then(data => this.books = data.data);
    this.filters = [
        {name: 'Seleccionar filtro', disabled: true, value: '1'},
        {name: 'Nombre', disabled: false, value: '2'},
        {name: 'Autor', disabled: false, value: '3'}
    ];
    this.actualFilter = this.filters[0].value;
    this.changeFilter = function(booksCtrl){
        if (booksCtrl.actualFilter === '2'){
            booksCtrl.books.sort((a,b) => a.title > b.title);
        }else if (booksCtrl.actualFilter === '3'){
            booksCtrl.books.sort((a,b) => a.author > b.author);
        }
    };
    this.textInput = '';
    this.placeholderSearch = 'Buscar...'
    this.submitSearch = function(booksCtrl){
        
    }
}]);
