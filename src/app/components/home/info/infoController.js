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
      onclick: function() {
        console.log('HOLA');
      },
      text: 'PROCESSING',
      error: {}
    };
    this.changeRentStatus = function(data, rentButton, userID, bookID) {
      let rentedBy = 'gfdfg';
      data.data.forEach(function(element) {
        const startDate = moment(element.from, 'YYYY-MM-DD');
        const endDate = moment(element.to, 'YYYY-MM-DD');
        const date = moment();
        if (date.isBefore(endDate) && date.isAfter(startDate) || (date.isSame(startDate) || date.isSame(endDate))) {
          rentedBy = element.user.id;
        }
      }, this);
      rentButton.disabled = false;
      if (rentedBy === null){
        rentButton.text = 'RENT';
        rentButton.onclick = function() {
          console.log('RENT');
        };
      }else if (rentedBy === userID) {
        rentButton.text = 'RETURN_BOOK';
        rentButton.disabled = true;
      }else {
        rentButton.text = 'WISHLIST';
        rentButton.onclick = function() {
          wishlistService.addBook(bookID, userID).then(() => rentButton.error.success = true, () => rentButton.error.ya_esta_en_uso = true);
        };
      }
    };
    booksService
      .getRentStatus(this.book.id)
      .then(data => this.changeRentStatus(data, this.rentButton, this.user.id, this.book.id));
    booksService
      .getSugestions(this.book.id)
      .then((data) => this.sugestions = data.data);
    this.comments = [];
    booksService
      .getComments(this.book.id)
      .then((data) => this.comments = data.data);
    this.user = loginService.getUserInfo();
    this.newCommentInput = '';
    this.addComment = function(infoCtrl) {
      const newComment = {
        name: infoCtrl.user.name,
        date: moment().format('DD/MM/YYYY'),
        description: infoCtrl.newCommentInput,
        image_url: infoCtrl.user.image
      };
      infoCtrl.comments.push(newComment);
      infoCtrl.newCommentInput = '';
    };
  }
]);
