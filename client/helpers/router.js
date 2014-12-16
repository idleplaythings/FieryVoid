Router.map(function() {
    this.route('shipMenu', {
        path: '/'
    });
    this.route('createShip', {
        path: '/ship/create'
    });
});

Router.configure({
    layoutTemplate: 'page'
});

Router.configure({
  onBeforeAction: function(){
    dic.cleanShared();
    this.next();
  }
})
