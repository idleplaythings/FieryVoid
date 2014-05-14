Router.map(function() {
  this.route('shipDesignEditor', {
    path: '/shipDesign/:_id/edit',

    waitOn: function () {
      return Meteor.subscribe('shipDesign', this.params._id);
    },

    action: function () {
      if (this.ready()) {
        this.render();
      }
    },

    data: function(){
      if (this.ready()){
        return {
          shipDesignId: this.params._id,
          ship: dic.get('model.ShipStorage').createFromDesignId(this.params._id, Meteor.user()._id)
        };
      }
    }
  });
});
