angular.module('wbooks').run([
  '$rootScope', '$state', 'sessionService',
  function ($rootScope, $state, sessionService) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (!sessionService.loginState() && toState.data.requireLogin) {
        event.preventDefault();
        $state.go('home.login', {}, { reload: true });
      } else if (sessionService.loginState() && !toState.data.requireLogin) {
        event.preventDefault();
        $state.go('home', {}, { reload: true });
      }
    });
  }
]);
