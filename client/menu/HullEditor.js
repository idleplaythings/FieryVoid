var HullEditor = function HullEditor(layout, shipView, target, dispatcher)
{
    this.layout = layout;
    this.view = shipView;
    this.dispatcher = dispatcher;

    this.create(target);
};

HullEditor.prototype.create = function(target)
{
    $('<div class="menu" style="top:0px;left:0px" >' +
        '<h2>Hull editor</h2>' +
        '<div><span>Manufacturer:</span></span><input name="Manufacturer" type="text" /></div>' +
        '<div><span>Hull name:</span></span><input name="HullName" type="text" /></div>' +
        '<div><span>Grid width:</span></span><input name="GridWidth" type="text" value="'+this.layout.width+'"/></div>' +
        '<div><span>Grid height:</span></span><input name="GridHeight" type="text" value="'+this.layout.height+'"/></div>' +
        '<div><span>Grid scale:</span></span><input name="TileScale" type="text" value="'+this.layout.tileScale+'"/></div>' +
        '</div>')
            .appendTo(target)
            .find('input').on('change', $.proxy(this.onChange, this));

};

HullEditor.prototype.onChange = function(event)
{

    var element = $(event.target);
    var name = element.attr("name")
    this['onChange' + name].call(this, element);
};

HullEditor.prototype.onChangeGridHeight = function(element)
{
    console.log("height");
    this.layout.height = element.val();
    this.dispatchChangedEvent();
};

HullEditor.prototype.onChangeGridWidth = function(element)
{
    console.log("width");
    this.layout.width = element.val();
    this.dispatchChangedEvent();
};

HullEditor.prototype.onChangeTileScale = function(element)
{
    this.layout.tileScale = element.val();
    this.dispatchChangedEvent();
};

HullEditor.prototype.dispatchChangedEvent = function()
{
    var event = new Event("player", "ShipImageChanged");
    this.dispatcher.dispatch(event);
}