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


//
//Meteor.Router.add({
//    '/': {
//        to: 'shipMenu'
//    },
//    '/editor/hull': {
//        to: 'hullEditor'
//    },
//    '/editor/module': {
//        to: 'moduleEditor'
//    },
//    '/ship/:_id/edit': {
//        to: 'shipEditor',
//        and: function(id) {
//            Session.set("selected_ship", id);
//        }
//    },
//    '/ship/create': {
//        to: 'createShip',
//    },
//    '/game/': {
//        and: function() {
//            Meteor.call('GameStart');
//        }
//    },
//    '/game/:_id': {
//        to: 'game',
//        and: function(id) {
//            Session.set("active_game", id);
//        }
//    }
//});

//Meteor.Router.filters({
//    'adminOnly': function(page) {
//        if (isAdminUser()) {
//            return page;
//        }
//
//        return 'forbidden';
//    }
//});
//
//Meteor.Router.filter('adminOnly', {
//    only: [
//        'moduleEditor',
//        'hullEditor'
//    ]
//});
