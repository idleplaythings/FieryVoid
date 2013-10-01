

Template.hullEditor.created = function()
{
    Meteor.subscribe("HullImages");
    Meteor.subscribe("HullLayoutsAdmin");
}

Template.hullEditor.rendered = function()
{
    if ( ! Template.hullEditor.controller)
    {
        var shipview = jQuery('div.displayLarge');

        Template.hullEditor.controller =
            new model.HullEditor(shipview);
    }
}

Template.hullEditor.destroyed = function()
{
    if (Template.hullEditor.controller)
    {
        Template.hullEditor.controller.destroy();
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
        console.log("selecting");
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

Template.hullmenu.hullScale = function()
{
    return getFromSelectedLayout('hullScale');
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