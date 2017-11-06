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
        onEnter: ['Popeye', function(Popeye) {
          Popeye.closeCurrentModal();
        }],
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
        onEnter: ['Popeye', '$state', function(Popeye, $state) {
          const modal = Popeye.openModal({
            templateUrl: '../app/components/home/login/login.html',
            controller: 'LoginController as logCtrl',
            containerClass: 'login-modal-container',
            keyboard: false,
            click: false,
          })
          modal.closed.then(function() {
            location.reload();
          })
        }],
        data: {
          requireLogin: false
        }
      })
      .state('home.register', {
        url: 'register',
        onEnter: ['Popeye', '$state', function(Popeye, $state) {
          const modalReg = Popeye.openModal({
            templateUrl: '../app/components/home/register/register.html',
            controller: 'RegisterController as regCtrl',
            containerClass: 'register-modal-container',
            keyboard: false
          });
          modalReg.closed.then(function() {
            location.reload();
          })
        }],
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
