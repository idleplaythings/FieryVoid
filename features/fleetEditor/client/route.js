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
        Meteor.call('createFleet', this._onCreated);
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
        template: 'fleet',
        data: function(){return {fleetId: this.params._id};}
    });
});
