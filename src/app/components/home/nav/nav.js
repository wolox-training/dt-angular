angular.module('wbooks').controller('NavController', [
  'sessionService',
  'notificationsService',
  '$state',
  function(sessionService, notificationsService, $state) {
    this.notifications = [];
    notificationsService.getNotifications().then((data) => this.notifications = data.data);
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
