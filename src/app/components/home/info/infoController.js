angular.module('wbooks').controller('InfoController', [
  'book',
  'booksService',
  function(book, booksService) {
    this.book = book;
    this.sugestions = [];
    booksService
      .getSugestions(this.book)
      .then((data) => this.sugestions = data.data);
    this.comments = [];
    booksService
      .getComments(this.book)
      .then((data) => this.comments = data.data);
    this.user = {
      name: 'Anonymus',
      image: ''
    };
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
