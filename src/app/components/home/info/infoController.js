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
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();

      if (dd < 10) {
        dd = `${dd}`;
      }

      if (mm < 10) {
        mm = `${mm}`;
      }

      const newComment = {
        name: infoCtrl.user.name,
        date: `${mm}/${dd}/${yyyy}`,
        description: infoCtrl.newCommentInput,
        image_url: infoCtrl.user.image
      };
      infoCtrl.comments.push(newComment);
      infoCtrl.newCommentInput = '';
    };
  }
]);
