Meteor.subscribe("HullImages");

Template.hullEditor.contextObject = null;

Template.hullEditor.context = function()
{
    if ( ! Template.hullEditor.contextObject)
        Template.hullEditor.contextObject =
            Template.hullEditor.createContext();

    return Template.hullEditor.contextObject;
};

Template.hullEditor.createContext = function()
{
    return {
        shipView: null,
        viewClass: model.ShipViewHull,
        lastMouseOverPos: null,
        modulePlacing: null,
        hullLayout:null,
        hullHandle: null,

        hullLayoutReactivity: function(self)
        {
            self.hullHandle = Deps.autorun(function(){
                var hullLayout = HullLayouts.findOne(
                    {_id: Session.get("selected_hullLayout")});

                if ( ! hullLayout)
                    return;

                self.hullLayout = hullLayout;

                self.shipView.drawImages({
                    hullLayout: hullLayout,
                    getColor: function(){ return hullLayout.color;}
                });
            });
        },

        handle: function(self) {
            self.hullLayoutReactivity(self);
        },

        click: function(self, containerPos)
        {
            var shipView = self.shipView;
            var hullLayout = self.hullLayout;

            if ( ! hullLayout)
                return;

            var pos = shipView.getClickedTile(containerPos);

            if (pos)
            {
                var height = Session.get('hullEditor_tileHeight');
                if ( ! height)
                    height = 1;

                var curHeight = hullLayout.getTileHeight(pos);

                if (height == curHeight || hullLayout.isDisabledTile(pos))
                {
                    hullLayout.toggleDisabledTile(pos);
                }
                else
                {
                    hullLayout.setTileHeight(pos, height);
                }
            }

        }
    };
};

Template.hullEditor = _.extend(Template.hullEditor, BaseTemplate);

Template.hullEditor.created = function()
{
    Meteor.subscribe("HullLayoutsAdmin");
}

Template.hullEditor.destroyed = function()
{
    if (Template.hullEditor.contextObject)
    {
        Template.hullEditor.contextObject.hullHandle.stop();
        Template.hullEditor.contextObject = null;
    }
}


Template.hullListing = _.extend(Template.hullListing, BaseTemplate);

Template.hullListing.hullImages = function () {
    var hulls = HullImages.find({});
    return hulls;
};




Template.hullImage.isSelected = function(){
    return Session.get("selected_hullImg") === this._id;
};

Template.hullImage.selected = function (){
    var selected = (Session.get("selected_hullImg") === this._id);
    return selected ? 'selected' : '';
};

Template.hullImage.events({
    'click .hull': function () {
        Session.set("selected_hullImg", this._id);
    }
});

Template.hullImage.hullLayouts = function()
{
    return HullLayouts.find({hullImgName: this.img});
};

Template.hullImage.events({
    'click .create': function () {
        Meteor.call('HullLayoutInsert', this.img, function(err, result){
           Session.set('selected_hullLayout', result);
        });
    }
});






Template.hullLayout.activeClass = function()
{
    return this.published ? 'active' : '';
};

Template.hullLayout.layoutName = function()
{
    var star = this.published ? '★' : '☆';
    return star + " " + this.name;
};

Template.hullLayout.selected = function()
{
    var selected = (Session.get("selected_hullLayout") === this._id);
    return selected ? 'selected' : '';
};

Template.hullLayout.events({
    'click .hullLayout': function () {
        Session.set('selected_hullLayout', this._id);
    }
});


Template.hullmenu = _.extend(Template.hullmenu, BaseTemplate);

Template.hullmenu.hullName = function()
{
    return getFromSelectedLayout('name');
};

Template.hullmenu.tileWidth = function()
{
    return getFromSelectedLayout('width');
};

Template.hullmenu.tileHeight = function()
{
    return getFromSelectedLayout('height');
};

Template.hullmenu.tileScale = function()
{
    return getFromSelectedLayout('tileScale');
};

Template.hullmenu.color = function()
{
    return getFromSelectedLayout('color');
};

Template.hullmenu.heightClass1 = function()
{
    return  ! Session.get('hullEditor_tileHeight') ? 'active' : '';
};

Template.hullmenu.heightClass2 = function()
{
    return Session.get('hullEditor_tileHeight') == '2' ? 'active' : '';
};

Template.hullmenu.events({
    'blur input': function (event) {
        handleDetailChange(event.currentTarget);
    },
    'click .publish': function(event) {
        var hullLayoutId = Session.get("selected_hullLayout");
        if (hullLayoutId)
        {
            var layout = HullLayouts.findOne({_id: hullLayoutId});
            if (layout)
            {
                layout.publish();
            }
        }
    },
    'click .tileheight': function(event) {
        var currentElement = event.target;
        var height = jQuery(currentElement).data('tileheight');
        console.log(height);

        if (height === 1)
            height = null;

        Session.set('hullEditor_tileHeight', height);
    }
});

Template.hullmenu.publishedClass = function()
{
    return getFromSelectedLayout('published') ? 'active' : '';
};

function getFromSelectedLayout(name)
{
    var hullLayoutId = Session.get("selected_hullLayout");
    if (hullLayoutId)
    {
        var layout = HullLayouts.findOne({_id: hullLayoutId});
        if (layout && layout[name])
            return layout[name];
    }

    return '';
}

function handleDetailChange(element)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();

    var hullLayoutId = Session.get("selected_hullLayout");
    if (hullLayoutId)
    {
        var layout = HullLayouts.findOne({_id: hullLayoutId});
        if (layout)
        {
            layout.updateIfDifferent(name, value);
        }
    }

}