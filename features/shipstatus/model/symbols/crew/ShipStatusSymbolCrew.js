model.ShipStatusSymbolCrew = function ShipStatusSymbolCrew(powerGenerated, args)
{
    model.ShipStatusSymbol.call(this, args);
    this.deploymentPosition = 'bottom';
    this.size = {width:30, height:30};

    this.description = 'Crew manning the system';
};

model.ShipStatusSymbolCrew.prototype =
    Object.create(model.ShipStatusSymbol.prototype);


model.ShipStatusSymbolCrew.prototype.drawCrewSymbol= function(context, size, center)
{
    context.beginPath();

    this.drawCrewSymbolHalf(context, size, size, center);
    this.drawCrewSymbolHalf(context, size*-1, size, center);
    context.moveTo(center.x, center.y - size);

    context.closePath();

    this.strokeAndFillWithShadow(context);

};

model.ShipStatusSymbolCrew.prototype.drawCrewSymbolHalf= function(context, sizex, sizey, center)
{
    context.moveTo(center.x, center.y - sizey);

    context.bezierCurveTo(
        center.x - sizex*0.4, center.y - sizey,
        center.x - sizex*0.4,center.y - sizey*0.2,
        center.x - sizex*0.2,center.y - sizey*0.1
    );

    context.bezierCurveTo(
        center.x, center.y + sizey*0.1,
        center.x - sizex,center.y + sizey*0.2,
        center.x - sizex,center.y + sizey
    );

    context.lineTo(center.x, center.y + sizey);

};

model.ShipStatusSymbolCrew.prototype.createIconImage = function()
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(180,235,130,1)";

    this.drawCrewSymbol(context, 12, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};

