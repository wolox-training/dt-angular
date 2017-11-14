angular.module('wbooks').controller('InfoController', [
  'book',
  'booksService',
  'loginService',
  'wishlistService',
  function(book, booksService, loginService, wishlistService) {
    this.book = book;
    this.sugestions = [];
    this.rentButton = {
      disabled: true,
      onclick: () => {},
      text: 'PROCESSING',
      error: {}
    };
    let bookID = -1;
    let userID = -1;
    let rentButton = this.rentButton;
    this.addWish = function() {
      console.log(userID);
      wishlistService.addBook(bookID, userID).then(() => rentButton.error.success = true, () => rentButton.error.ya_esta_en_uso = true);
    };
    this.changeRentStatus = function(data) {
      let rentedBy = 'sdsadsa';
      data.data.forEach(function(element) {
        const startDate = moment(element.from, 'YYYY-MM-DD');
        const endDate = moment(element.to, 'YYYY-MM-DD');
        const date = moment();
        if (date.isBefore(endDate) && date.isAfter(startDate) || (date.isSame(startDate) || date.isSame(endDate))) {
          rentedBy = element.user.id;
        }
      }, this);
      this.rentButton.disabled = false;
      if (rentedBy === null){
        this.rentButton.text = 'RENT';
        this.rentButton.onclick = function() {
          console.log('RENT');
        };
      } else if (rentedBy === this.userID) {
        this.rentButton.text = 'RETURN_BOOK';
        this.rentButton.disabled = true;
      } else {
        this.rentButton.text = 'WISHLIST';
        this.rentButton.onclick = this.addWish;
        userID = this.user.id;
        bookID = this.book.id;
      }
    };
    booksService
      .getRentStatus(this.book.id)
      .then((data) => this.changeRentStatus(data));
    booksService
      .getSugestions(this.book.id)
      .then((data) => this.sugestions = data.data);
    this.comments = [];
    booksService
      .getComments(this.book.id)
      .then((data) => this.comments = data.data);
    this.user = {};
    loginService.getUserInfo().then((data) => this.user = data.data);
    this.newCommentInput = '';
    this.addComment = function(infoCtrl) {
      const newComment = {
        user: {
          first_name: infoCtrl.user.first_name,
          last_name: infoCtrl.user.last_name,
          image_url: infoCtrl.user.image
        },
        created_at: moment().format(),
        content: infoCtrl.newCommentInput
      };
      infoCtrl.comments.push(newComment);
      booksService.addComment(infoCtrl.book.id, infoCtrl.user.id, infoCtrl.newCommentInput).then((data) => console.log(data), (error) => console.log(error));
      infoCtrl.newCommentInput = '';
    };
    this.getDate = function(stamp) {
      return moment(stamp).format('YYYY/MM/DD');
    };
  }
]);
