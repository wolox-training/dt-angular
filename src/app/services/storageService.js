angular.module('wbooks').factory('storageService', [
  'localStorageService',
  '$http',
  function (localStorageService, $http) {
    const sessionToken = 'loggedUserSessionToken';
    return {
      setSessionToken: (token) => {
        localStorageService.set(sessionToken, token);
        $http.defaults.headers.common.authorization = token;
      },

      getSessionToken: () => {
        return localStorageService.get(sessionToken);
      },

      removeSessionToken: () => {
        localStorageService.remove(sessionToken);
        delete $http.defaults.headers.common.authorization;
      }
    };
  }
]);
