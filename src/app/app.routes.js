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
        onEnter: ['ngDialog', function(ngDialog) {
          ngDialog.closeAll();
        }],
        views: {
          nav: {
            templateUrl: '../app/components/home/nav/nav.html',
            controller: 'NavController',
            controllerAs: 'navCtrl'
          },
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
        onEnter: ['ngDialog', '$state', function(ngDialog, $state) {
          const modalLog = ngDialog.open({
            template: '../app/components/home/login/login.html',
            controller: 'LoginController',
            controllerAs: 'logCtrl',
            className: 'ngdialog-theme-default',
            showClose: false,
            width: '40%',
            closeByDocument: false,
            closeByNavigation: true
          });
          modalLog.closePromise.then(() => $state.go('home', {}, { reload: true }) );
        }],
        data: {
          requireLogin: false
        }
      })
      .state('home.register', {
        url: 'register',
        onEnter: ['ngDialog', '$state', function(ngDialog, $state) {
          const modalReg = ngDialog.open({
            template: '../app/components/home/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'regCtrl',
            className: 'ngdialog-theme-default',
            showClose: false,
            width: '40%',
            closeByNavigation: true
          });
          modalReg.closePromise.then(() => $state.go('home', {}, { reload: true }));
        }],
        data: {
          requireLogin: false
        }
      })
      .state('home.suggest', {
        url: 'suggest-book',
        onEnter: ['ngDialog', '$state', function(ngDialog, $state) {
          const modalReg = ngDialog.open({
            template: '../app/components/home/suggest/suggest.html',
            controller: 'SuggestController',
            controllerAs: 'sugCtrl',
            className: 'ngdialog-theme-default',
            showClose: false,
            width: '40%',
            closeByNavigation: true
          });
          modalReg.closePromise.then(() => $state.go('home', {}, { reload: true }));
        }],
        data: {
          requireLogin: true
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
          nav: {
            templateUrl: '../app/components/home/nav/nav.html',
            controller: 'NavController',
            controllerAs: 'navCtrl'
          },
          main: {
            templateUrl: '../app/components/home/info/info.html',
            controller: 'InfoController',
            controllerAs: 'infoCtrl'
          }
        },
        data: {
          requireLogin: true
        }
      })
      .state('profile', {
        url: '/profile/{id:int}',
        views: {
          nav: {
            templateUrl: '../app/components/home/nav/nav.html',
            controller: 'NavController',
            controllerAs: 'navCtrl'
          },
          main: {
            templateUrl: '../app/components/home/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profCtrl'
          }
        },
        data: {
          requireLogin: true
        }
      });
    $locationProvider.html5Mode(true);
  }
]);
