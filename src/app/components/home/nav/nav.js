angular.module('wbooks').controller('NavController', [
  'sessionService',
  'notificationsService',
  '$state',
  '$translate',
  function(sessionService, notificationsService, $state, $translate) {
    this.notifications = [];
    notificationsService.getNotifications().then((data) => this.notifications = data.data);
    this.user = {
      icon: ''
    };
    this.userOptions = [
      {
        text: $translate.instant('LOGOUT'),
        action: function() {
          sessionService.deleteUserInfo();
          $state.go('home.login');
        }
      }
    ];
  }
]);
