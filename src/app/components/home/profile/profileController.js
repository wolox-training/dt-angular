angular.module('wbooks').controller('ProfileController', ['loginService', 'wishlistService', '$stateParams', function(loginService, wishlistService, $stateParams) {
  this.user = {};
  this.rentedBooks = [];
  this.wishlistBooks = [];
  this.comments = [];
  this.manageUserInfo = function(dat) {
    this.user = dat.data;
    loginService.getRentedBooks(this.user.id).then((data) => this.rentedBooks = data.data);
    wishlistService.getWishlist(this.user.id).then((data) => this.wishlistBooks = data.data, () => this.wishlistBooks = []);
    loginService.getComments(this.user.id).then((data) => this.comments = data.data);
  };
  loginService.getOtherUserInfo($stateParams.id).then(data => this.manageUserInfo(data));
  this.getDate = function(stamp) {
    return moment(stamp).format('YYYY/MM/DD');
  };
}]);
