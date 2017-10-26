
angular.module('wbooks').controller('infoController',['book','booksService','$state',function(book,booksService,$state){
    this.book = book;
    this.sugestions = [];
    booksService.getSugestions(this.book).then(data => this.sugestions = data.data);
    this.comments = [];
    booksService.getComments(this.book).then(data => this.comments = data.data);
}])