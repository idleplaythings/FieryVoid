Router.map(function() {
  this.route('moduleEditor', {
    path: '/editor/module',

    waitOn: function () {
      return [
        Meteor.subscribe("ModuleImages"),
        Meteor.subscribe("ModuleLayouts")
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
          moduleLayout: dic.get('model.ModuleLayoutRepository').getModuleLayout(
            Session.get('moduleeditor_selected_moduleLayout')),
          moduleImages: ModuleImages.find({}),
          moduleLayouts: dic.get('model.ModuleLayoutRepository').getModuleLayouts()
        };
      }
    }
  });
});
