angular.module('wbooks').service('notificationsService',['$http', function($http) {
    this.getNotifications = function() {
        return $http.get('assets/Notifications.json');
    };
}]);
