Meteor.subscribe("HullImages");

Meteor.startup(function () {
    Deps.autorun(function () {

        //var shipLayout = new model.ShipLayout({hullName:"hull1"});
        //var ship = new model.Ship({id:1, shipLayout:shipLayout});

        /*
         if ( ! Session.get("selectedShip"))
         {
         window.gameState = new model.GameState();

         var shipLayout = new model.ShipLayout({hullName:"hull1"});
         var ship = new model.Ship({id:1, shipLayout:shipLayout});
         Session.set("selectedShipId", ship);
         }
         */
    });
});

var getHeight = function()
{
    return window.innerHeight - 30;
};

jQuery(window).resize(function()
{
    jQuery('.hulleditor, .sidemenu').height(getHeight());
});

Template.hulleditor.height = function()
{
    return getHeight() + "px";
};

Template.hullListing.height = function()
{
    return getHeight() + "px";
};

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

Template.hullImage.rendered = function(){
    var self = this;
    self.hullcanvas = self.find('.hullcanvas');

    if ( ! self.shiphullimage)
         self.shiphullimage = new model.ShipHullCompositeImage({hullName: self.data.img});

    self.shiphullimage.getImageDataToCallback(
        jQuery.proxy(Template.hullImage.receiveImageData, self));
};

Template.hullImage.receiveImageData = function(img)
{
    var self = this;
    var data = img.data;

    var drawingTool = window.Tools.getCanvasDrawingTool();
    drawingTool.resizeToFitAndDrawToMiddle(
        self.hullcanvas, data);
};

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



Template.hullmenu.height = function()
{
    return getHeight() + "px";
};

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