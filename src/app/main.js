(function(){
    const app = angular.module('wbooks',[]);

    app.factory('booksService',['$http',function($http){
        this.books = [];
        this.getBooks = function(booksService){
            $http.get('assets/Books.json').then(function(data){
                booksService.books = data.data;
            },null);
        }
        this.sortBooks = function(booksService,order){
            if (order === '2'){
                booksService.books.sort((a,b) => a.title > b.title);
            }else if (order === '3'){
                booksService.books.sort((a,b) => a.author > b.author);
            }
        }
        return this;
    }]);

    app.controller('FilterController',['booksService', function(booksService){
        this.filters = [
            {name: 'Seleccionar filtro', disabled: true, value: '1'},
            {name: 'Nombre', disabled: false, value: '2'},
            {name: 'Autor', disabled: false, value: '3'}
        ];
        this.actualFilter = this.filters[0].value;
        this.changeFilter = function(filter, main){
            booksService.sortBooks(booksService, filter.actualFilter);
        };
    }]);

    app.controller('SearchController',function(){
        this.text = '';
        this.placeholder = 'Buscar...'
        this.submit = function(search){
            
        }
    });

    app.controller('BooksController',['booksService', function(booksService){
        booksService.getBooks(booksService);
        this.getBooks = function(){
            return booksService.books;
        }
    }]);

})();