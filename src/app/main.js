(function(){
    const app = angular.module('wbooks',[]);

    app.controller('FilterController',function(){
        this.filters = [
            {name: 'Seleccionar filtro', disabled: true, value: '1'},
            {name: 'Nombre', disabled: false, value: '2'},
            {name: 'Autor', disabled: false, value: '3'}
        ];
        this.actualFilter = this.filters[0].value;
    });

    app.controller('SearchController',function(){
        this.text = '';
        this.placeholder = 'Buscar...'
        this.submit = function(search){
            
        }
    });

    app.controller('BooksController',['$http', function($http){
        this.books = [];
        const act = this;
        $http.get('Books.json').then(
            function(data){
                act.books = data.data
                act.books.map(function(item){
                    if (item['image_url'] === null){
                        item['image_url'] = '/assets/default_book.svg';
                    }
                    item['show'] = true;
                });
            },
            function(data){
                console.log(data);
            }
        );
    }]);

})();