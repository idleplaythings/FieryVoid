Router.map(function() {
    this.route('shipDesignEditor', {
        path: '/shipDesign/:_id/edit',
        template: 'shipDesignEditor'
    });
});

ShipDesignEditorController = RouteController.extend({
    getShipDesignId: function() {
        return this.params._id;
    },
    waitOn: function() {
        return Meteor.subscribe('shipDesign', this.getShipDesignId());
    },
    run: function() {
        Session.set("selected_shipDesign", this.getShipDesignId());
        this.render();
    }
});
