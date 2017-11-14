angular.module('wbooks').controller('NavController', [
  'sessionService',
  'notificationsService',
  'loginService',
  '$state',
  '$translate',
  function(sessionService, notificationsService, loginService, $state, $translate) {
    this.notifications = [];
    this.readNotificationsCount = 0;
    loginService.getUserInfo().then((data) => notificationsService.getNotifications(data.data.id).then((data2) => this.notifications = data2.data));
    this.userOptions = [
      {
        text: $translate.instant('PROFILE'),
        action: () => {
          loginService.getUserInfo().then((data) => $state.go('profile', { id: data.data.id }));
        }
      },
      {
        text: $translate.instant('LOGOUT'),
        action: function() {
          sessionService.deleteUserInfo();
          $state.go('home.login');
        }
      },
    ];
    this.getReadNotificationsCount = function() {
      let count = 0;
      this.notifications.forEach((element) => {
        if (element.read === false) {
          count++;
        }
      });
      return count;
    };
  }
]);
