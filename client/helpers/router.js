//shipDesigns = Meteor.subscribe("shipDesigns");

Router.map(function() {
    this.route('shipMenu', {
        path: '/'
    });
    this.route('hullEditor', {
        path: '/editor/hull'
    });
    this.route('moduleEditor', {
        path: '/editor/module'
    });
    this.route('shipEditor', {
        path: '/ship/:_id/edit'
    }, function() {
        Session.set("selected_ship", this.params._id);

        this.render();
    });
    this.route('createShip', {
        path: '/ship/create'
    });
    this.route('newGame', {
        path: '/game/',
        template: 'game',
        waitOn: function() {
            return [
                HullLayouts,
                shipDesigns
            ];
        }
    }, function() {
        var onGameCreated = function(error, gameId) {
            if (error) {
                console.log(error);
                return;
            }

            Router.go('existingGame', { _id: gameId });
        };

        Meteor.call('GameStart', Meteor.userId(), Meteor.userId(), onGameCreated);
    });
    this.route('existingGame', {
        path: '/game/:_id',
        template: 'game'
    }, function() {
        Session.set("active_game", this.params._id);

        this.render();
    });
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
