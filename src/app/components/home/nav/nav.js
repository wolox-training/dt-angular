angular.module('wbooks').controller('NavController', [
  'sessionService',
  '$state',
  function(sessionService, $state) {
    this.user = {
      icon: ''
    };
    this.userOptions = [
      {
        text: 'Cerrar sesion',
        action: function(){
          sessionService.deleteUserInfo();
          $state.go('home.login');
        }
      }
    ];
  }
]);
