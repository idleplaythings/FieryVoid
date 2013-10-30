Router.map(function() {
    this.route('createFleet', {
        path: '/fleet/',
        template: 'fleet'
    });
});

CreateFleetController = RouteController.extend({
    waitOn: function() {
        return [
            HullLayouts,
            shipDesigns
        ];
    },
    run: function() {
        Meteor.call('CreateFleet', Meteor.userId(), this._onCreated);
    },

    _onCreated: function(error, fleet) {
        if (error) {
            console.log(error);
            return;
        }

        Router.go('loadFleet', fleet);
    }
});

Router.map(function() {
    this.route('loadFleet', {
        path: '/fleet/:_id',
        template: 'fleet'
    });
});

LoadGameController = RouteController.extend({
    getFleetId: function() {
        return this.params._id;
    },
    waitOn: function() {
        return Meteor.subscribe('myFleets');
    },
    run: function() {
        Session.set("active_fleet", this.getFleetId());
        this.render();
    }
});