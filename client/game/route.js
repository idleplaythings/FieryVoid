Router.map(function() {
    this.route('createGame', {
        path: '/game/',
        template: 'game'
    });
});

CreateGameController = RouteController.extend({
    waitOn: function() {
        return [
            HullLayouts,
            shipDesigns
        ];
    },
    run: function() {
        Meteor.call('GameStart', Meteor.userId(), Meteor.userId(), this._onCreated);
    },
    _onCreated: function(error, game) {
        if (error) {
            console.log(error);
            return;
        }

        Router.go('loadGame', game);
    }
});

Router.map(function() {
    this.route('loadGame', {
        path: '/game/:_id',
        template: 'game'
    });
});

LoadGameController = RouteController.extend({
    waitOn: function() {
        return Meteor.subscribe('currentGame', this.params._id);
    },
    run: function() {
        Session.set("active_game", this.params._id);
        this.render();
    }
});
