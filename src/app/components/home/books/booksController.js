angular.module('wbooks').service('booksService',['$http',function($http){
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
}]);

angular.module('wbooks').controller('booksController',['booksService', '$state', function(booksService, $state){
    booksService.getBooks(booksService);
    this.getBooks = function(){
        return booksService.books;
    }
    this.getBookInfo = function(book){
        $state.go('info');
    }
}]);
