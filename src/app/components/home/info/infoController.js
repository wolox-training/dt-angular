
angular.module('wbooks').controller('infoController',['book','booksService','$state',function(book,booksService,$state){
    this.book = book;
    this.sugestions = [];
    booksService.getSugestions(this.book).then(data => this.sugestions = data.data);
    this.comments = [];
    booksService.getComments(this.book).then(data => this.comments = data.data);
    this.user = {
        name: 'Anonymus',
        image: ''
    }
    this.newCommentInput = '';
    this.addComment = function(infoCtrl){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        
        if(dd < 10) {
            dd = '0'+dd
        } 
        
        if(mm < 10) {
            mm = '0'+mm
        } 
        
        let date = mm + '/' + dd + '/' + yyyy;
        let newComment = {
            name: infoCtrl.user.name,
            date: date,
            description: infoCtrl.newCommentInput,
            image_url: infoCtrl.user.image
        }
        infoCtrl.comments.push(newComment);
        infoCtrl.newCommentInput = '';
    }
}])