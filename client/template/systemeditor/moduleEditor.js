Meteor.subscribe("ModuleImages");

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

Template.moduleEditor.height = function()
{
    return getHeight() + "px";
};

Template.moduleListing.height = function()
{
    return getHeight() + "px";
};

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
    console.log(this);
    return '/module/' +this.img+ '-inside.png';
};

Template.moduleImage.moduleLayouts = function()
{
    return ModuleLayouts.find({moduleImgName: this.img});
};

Template.moduleImage.events({
    'click .create': function () {
        Meteor.call('ModuleLayoutInsert', this.img, function(err, result){
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



Template.moduleMenu.height = function()
{
    return getHeight() + "px";
};

Template.moduleMenu.moduleName = function()
{
    return getFromSelectedLayout('name');
};

Template.moduleMenu.tileWidth = function()
{
    return getFromSelectedLayout('width');
};

Template.moduleMenu.tileHeight = function()
{
    return getFromSelectedLayout('height');
};

Template.moduleMenu.tileScale = function()
{
    return getFromSelectedLayout('tileScale');
};

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
    }
});

Template.moduleMenu.publishedClass = function()
{
    return getFromSelectedLayout('published') ? 'active' : '';
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