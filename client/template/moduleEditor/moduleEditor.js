Meteor.subscribe("ModuleImages");

Template.moduleEditor.context = function()
{
    return {
        shipView: null,
        viewClass: model.ShipViewModule,
        lastMouseOverPos: null,
        modulePlacing: null,

        handle: function(self) {

            var module = ModuleLayouts.findOne(
                {_id: Session.get("selected_moduleLayout")});

            if ( ! module)
                return;

            self.shipView.drawImages({hullLayout: module, modules: [module]});
        },

        click: function(self, containerPos)
        {
            var shipView = self.shipView;
            var module = ModuleLayouts.findOne(
                {_id: Session.get("selected_moduleLayout")});

            if ( ! module)
                return;

            var pos = shipView.getClickedTile(containerPos);

            if (pos)
            {
                var type = Session.get('moduleEditor_brushType');

                if ( ! type)
                    module.toggleDisabledTile(pos);
                else if (type == 'outside')
                    module.toggleOutsideTile(pos);
            }

        }
    };
};

Template.moduleEditor = _.extend(Template.moduleEditor, BaseTemplate);

Template.moduleListing = _.extend(Template.moduleListing, BaseTemplate);

Template.moduleListing.moduleImages = function () {
    var imgs = ModuleImages.find({});
    return imgs;
};




Template.moduleImage.isSelected = function(){
    return Session.get("selected_moduleImg") === this._id;
};

Template.moduleImage.selected = function (){
    var selected = (Session.get("selected_moduleImg") === this._id);
    return selected ? 'selected' : '';
};

Template.moduleImage.events({
    'click .module': function () {
        Session.set("selected_moduleImg", this._id);
    }
});

Template.moduleImage.moduleImgSrc = function(){
    return this.getDefault();
};

Template.moduleImage.moduleLayouts = function()
{
    return ModuleLayouts.find({image: this.name});
};

Template.moduleImage.events({
    'click .create': function () {
        Meteor.call('ModuleLayoutInsert', this.name, function(err, result){
           Session.set('selected_moduleLayout', result);
        });
    }
});






Template.moduleLayout.activeClass = function()
{
    return this.published ? 'active' : '';
};

Template.moduleLayout.layoutName = function()
{
    var star = this.published ? '★' : '☆';
    return star + " " + this.name;
};

Template.moduleLayout.selected = function()
{
    var selected = (Session.get("selected_moduleLayout") === this._id);
    return selected ? 'selected' : '';
};

Template.moduleLayout.events({
    'click .moduleLayout': function () {
        Session.set('selected_moduleLayout', this._id);
    }
});


Template.moduleMenu = _.extend(Template.moduleMenu, BaseTemplate);


Template.moduleMenu.moduleName = function()
{
    return getFromSelectedLayout('name');
};

Template.moduleMenu.tileGridWidth = function()
{
    return getFromSelectedLayout('width');
};

Template.moduleMenu.tileGridHeight = function()
{
    return getFromSelectedLayout('height');
};

Template.moduleMenu.tileScale = function()
{
    return getFromSelectedLayout('tileScale');
};

Template.moduleMenu.tileHeight = function()
{
    return getFromSelectedLayout('tileHeight');
};

Template.moduleMenu.traits = function()
{
    var trait,
        traits = [];

    model.ModuleLayout.getAvailableTraits().every(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayout(trait.name);

        if (value) {
            trait.value = value;
        } else {
            trait.value = '';
        }

        traits.push(trait);

        return true;
    });

    return traits;
}

Template.moduleMenu.events({
    'blur input': function (event) {
        handleDetailChange(event.currentTarget);
    },
    'click .publish': function(event) {
        var layoutId = Session.get("selected_moduleLayout");
        if (layoutId)
        {
            var layout = ModuleLayouts.findOne({_id: layoutId});
            if (layout)
            {
                layout.publish();
            }
        }
    },
    'click .outside': function(event) {
        Session.set('moduleEditor_brushType', 'outside');
    },
    'click .disabled': function(event) {
        Session.set('moduleEditor_brushType', null);
    }

});

Template.moduleMenu.publishedClass = function()
{
    return getFromSelectedLayout('published') ? 'active' : '';
};

Template.moduleMenu.outsideClass = function()
{
    return Session.get('moduleEditor_brushType') == 'outside' ? 'active' : '';
};

Template.moduleMenu.disabledClass = function()
{
    return Session.get('moduleEditor_brushType') ? '' : 'active';
};

function getFromSelectedLayout(name)
{
    var layoutId = Session.get("selected_moduleLayout");
    if (layoutId)
    {
        var layout = ModuleLayouts.findOne({_id: layoutId});

        if (layout && layout[name])
            return layout[name];
    }

    return '';
}

function handleDetailChange(element)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();

    var layoutId = Session.get("selected_moduleLayout");
    if (layoutId)
    {
        var layout = ModuleLayouts.findOne({_id: layoutId});
        if (layout)
        {
            layout.updateIfDifferent(name, value);
        }
    }

}