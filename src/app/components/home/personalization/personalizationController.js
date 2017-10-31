angular.module('wbooks').controller('personalizationController', ['booksService', function(booksService){
    this.filters = [
        {name: 'Seleccionar filtro', disabled: true, value: '1'},
        {name: 'Nombre', disabled: false, value: '2'},
        {name: 'Autor', disabled: false, value: '3'}
    ];
    this.actualFilter = this.filters[0].value;
    this.changeFilter = function(pers){
        booksService.sortBooks(booksService, pers.actualFilter);
    };
    this.textInput = '';
    this.placeholderSearch = 'Buscar...'
    this.submitSearch = function(pers){
        
    }
}]);
