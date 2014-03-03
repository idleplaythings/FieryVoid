Router.map(function() {
    this.route('hullEditor', {
        path: '/editor/hull',
        template: 'hullEditor',

        waitOn: function () {
            return [
                Meteor.subscribe("HullImages"),
                Meteor.subscribe("HullLayouts")
            ];
        },

        action: function () {
            if (this.ready()) {
                this.render();
            }
        },

        data: function(){
          if (this.ready()){
            return {
                hullLayout: dic.get('model.HullLayoutRepository').getHullLayout(Session.get('hulleditor_selected_hullLayout')),
                hullImages: HullImages.find({}),
                hullLayouts: HullLayouts.find({})
            };
          }
        }
    });
});