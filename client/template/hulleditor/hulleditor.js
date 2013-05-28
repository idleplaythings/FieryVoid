Meteor.subscribe("HullImages");

Template.hulleditor.context = function()
{
    return {
        shipView: null,
        viewClass: model.ShipViewHull,
        lastMouseOverPos: null,
        modulePlacing: null,

        handle: function(self) {

            var hullLayout = HullLayouts.findOne(
                {_id: Session.get("selected_hullLayout")});

            if ( ! hullLayout)
                return;

            self.shipView.drawImages({hullLayout: hullLayout});
        },

        click: function(self, containerPos)
        {
            var shipView = self.shipView;
            var hullLayout = HullLayouts.findOne(
                {_id: Session.get("selected_hullLayout")});

            if ( ! hullLayout)
                return;

            var pos = shipView.getClickedTile(containerPos);

            if (pos)
                hullLayout.toggleDisabledTile(pos);
        }
    };
};


Template.hulleditor = _.extend(Template.hulleditor, BaseTemplate);

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