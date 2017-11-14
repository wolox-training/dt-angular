angular.module('wbooks').service('notificationsService', ['$http', function($http) {
  const api = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  this.getNotifications = function(user_id) {
    return $http.get(`${api}/users/${user_id}/notifications`);
  };
  this.markAsRead = function(user_id, notification_id) {
    return $http.post(`${api}/users/${user_id}/notifications/${notification_id}/read`);
  };
}]);
