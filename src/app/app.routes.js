angular.module('wbooks').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('home');
    });

    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main: {
            templateUrl: '../app/components/home/books/books.html',
            controller: 'BooksController',
            controllerAs: 'booksCtrl'
          }
        },
        data: {
          requireLogin: true
        }
      })
      .state('home.login', {
        url: 'login',
        data: {
          requireLogin: false
        }
      })
      .state('home.register', {
        url: 'register',
        data: {
          requireLogin: false
        }
      })
      .state('info', {
        url: '/info/{id:int}',
        resolve: {
          book: ['booksService', '$stateParams', function(booksService, $stateParams) {
            return booksService.getBooks().then(function(data) {
              return data.data.find((element) => element.id === $stateParams.id);
            });
          }]
        },
        views: {
          main: {
            templateUrl: '../app/components/home/info/info.html',
            controller: 'InfoController',
            controllerAs: 'infoCtrl'
          }
        },
        data: {
          requireLogin: true
        }
      });
    $locationProvider.html5Mode(true);
  }
]);
