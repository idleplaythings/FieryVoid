model.RadialMenu = function RadialMenu(
    id, buttons, coordinateConverter, dispatcher, uiResolver, settings)
{
    this.id = id;
    this.coordinateConverter = coordinateConverter;
    this.uiElement = null;
    this.size = 150;
    this.buttons = buttons;

    this.hideAfterClick = settings.hideAfterClick || false;

    uiResolver.registerListener('drag', this.hide.bind(this), 100);
    uiResolver.registerListener('click', this.hide.bind(this), 100);
    dispatcher.attach("ZoomEvent", this.hide.bind(this));
};

model.RadialMenu.prototype.hide = function()
{
    this.getUi().hide();
};

model.RadialMenu.prototype.getUi = function()
{
    if ( ! this.uiElement)
    {
        this.createUiElement();
    }

    return this.uiElement;
};

model.RadialMenu.prototype.show = function(movement, wp)
{
    var pos = this.coordinateConverter.fromGameToViewPort(wp.position);
    var element = this.getUi();
    var offsetTop = jQuery("#gameContainer")[0].offsetTop;

    this.arrangeButtons(movement, wp);

    element
        .css("top", (offsetTop + pos.y - this.size/2) + "px")
        .css("left", (pos.x - this.size/2) + "px")
        .show();
};

model.RadialMenu.prototype.arrangeButtons = function(movement, wp)
{
    var step = 360 / Object.keys(this.buttons).length;
    var start = 270;
    var n = 0;

    for (var i in this.buttons)
    {
        var button = this.buttons[i];

        if (button.shouldDisplay(movement, wp))
        {
            console.log("should display!");
            this.placeButton(button.get(), MathLib.addToAzimuth(start, step*n));
            n++;
            button.enable(movement, wp);
        }
        else
        {
            button.disable();
        }
    }
};

model.RadialMenu.prototype.placeButton = function(button, angle)
{
    var halfSize = this.size/2;
    var pos = MathLib.getPointInDirection(54, angle, halfSize, halfSize);
    button
        .css("top", (pos.y - 15) + "px")
        .css("left", (pos.x - 17) + "px");
};

model.RadialMenu.prototype.createUiElement = function()
{
    var container = jQuery('#'+this.id);
    if (container.length === 0)
    {
        var container = jQuery('' +
            '<div id="'+this.id+'" class="radialMenu" style="position:absolute;z-index:100;width:'+this.size+';height:'+this.size+'"></div>');

        var drawingTool = Tools.getCanvasDrawingTool();
        var drawingCanvas =
            $('<canvas width="'+this.size+'" height="'+this.size+'"></canvas>');

        var halfSize = this.size/2;
        var context = drawingCanvas.get(0).getContext("2d");

        context.strokeStyle = "rgba(159,187,202,0)";
        context.fillStyle = "rgba(47,54,72,0.5)";

        //context.strokeStyle = "rgba(255,255,255,1)";
        //context.fillStyle = "rgba(255,255,255,0.5)";

        drawingTool.drawHollowCircleAndFill(context, halfSize, halfSize, halfSize*0.5, halfSize*0.95, 2);
        drawingCanvas.appendTo(container);

        this.buttons.forEach(function(button){
            if (this.hideAfterClick)
                button.get().on('click', this.hide.bind(this));

            button.get().appendTo(container);
        }, this)

        container.appendTo("body");
        this.uiElement = container;
    }
    else
    {
        this.uiElement = container;
    }
};




