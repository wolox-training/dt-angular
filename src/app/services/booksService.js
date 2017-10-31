angular.module('wbooks').service('booksService',['$http',function($http){
    this.getBooks = function(){
        return $http.get('assets/Books.json');
    }
    this.getSugestions = function(book){
        return $http.get('assets/Sugestions.json');
    }
    this.getComments = function(book){
        return $http.get('assets/Comments.json');
    }
}]);