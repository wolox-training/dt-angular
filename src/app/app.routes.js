angular.module('wbooks').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('homePage');
    });

    // Now set up the states
    $stateProvider
      .state('homePage', {
        url: '/',
        views: {
          personalization: {
            templateUrl: '../app/components/home/personalization/personalization.html',
            controller: 'personalizationController',
            controllerAs: 'pers'            
          },
          books: {
            templateUrl: '../app/components/home/books/books.html',
            controller: 'booksController',
            controllerAs: 'books'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
