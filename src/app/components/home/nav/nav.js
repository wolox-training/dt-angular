angular.module('wbooks').controller('NavController', [
  'sessionService',
  'notificationsService',
  'loginService',
  '$state',
  '$translate',
  function(sessionService, notificationsService, loginService, $state, $translate) {
    this.notifications = [];
    notificationsService.getNotifications().then((data) => this.notifications = data.data);
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
