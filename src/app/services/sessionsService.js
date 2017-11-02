angular.module('wbooks').factory('sessionService', [
  'storageService', '$http',
  function (storageService, $http) {

    let login = !!storageService.getSessionToken();
    if (login) {
      $http.defaults.headers.common.authorization = storageService.getSessionToken();
    }

    return {
      setUserInfo: (userData) => {
        login = true;
        storageService.setSessionToken(userData.access_token);
      },

      getUserInfo: () => {
        return storageService.getSessionToken();
      },

      deleteUserInfo: () => {
        login = false;
        storageService.removeSessionToken();
      },

      loginState: () => {
        return login;
      }

    };
  }]
);
