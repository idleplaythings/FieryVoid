model.ShipStatusSymbolCrew = function ShipStatusSymbolCrew(type, crew, crewManagement)
{
    model.ShipStatusSymbol.call(this);
    this.crewManagement = crewManagement;
    this.deploymentPosition = 'bottom';
    this.type = type;
    this.crew = crew;
    this.set(type, crew);
};

model.ShipStatusSymbolCrew.prototype =
    Object.create(model.ShipStatusSymbol.prototype);

model.ShipStatusSymbolCrew.prototype.set = function(type, crew)
{
	this.type = type;
	
    if (type == 'assigned')
    {
        this.description = 'Crew manning the system';
        this.createIconImage = this.createIconImageCrewManning.bind(this, crew);
        this.draggable = true;
        this.getHtmlElement().data("dropPayload", this.crew);
    }

    if (type == 'idle')
    {
        this.description = 'Idle crew';
        this.createIconImage = this.createIconImageCrewManning.bind(this, crew);
        this.draggable = true;
        this.getHtmlElement().data("dropPayload", this.crew);
    }

    if (type == 'missing')
    {
        this.description =
            'Crew required';

        this.createIconImage = this.createIconImageCrewRequired.bind(this);
    }
    
    if (type == 'freeSpace')
    {
        this.description =
            'Free space for crew';
            
        this.dropTarget = true;
        this.createIconImage = this.createIconImageCrewRequired.bind(this);
    }
};

model.ShipStatusSymbolCrew.prototype.getDropPayload = function()
{
	return JSON.stringify(this.crew.toJson());
};

model.ShipStatusSymbolCrew.prototype.allowDrop = function(statusSymbol)
{
	if (this.type != 'freeSpace' && this.type != 'missing')
		return false;
	
	var allow = statusSymbol instanceof model.ShipStatusSymbolCrew && statusSymbol.draggable;
	return allow;
};

model.ShipStatusSymbol.prototype.onDrop = function(event)
{
	var payload = this.getPayloadFromDropEvent(event);
	console.log(payload);
};

model.ShipStatusSymbolCrew.prototype.createIconImage = function()
{

};

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

model.ShipStatusSymbolCrew.prototype.createIconImageCrewManning = function(crew)
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(180,235,130,1)";

    this.drawCrewSymbol(context, 12, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};

model.ShipStatusSymbolCrew.prototype.createIconImageCrewRequired = function(crew)
{
    var drawingCanvas = this.getCanvas();
    var context = drawingCanvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = "rgba(255,255,255,1)";
    context.fillStyle = "rgba(0,0,0,1)";

    this.drawCrewSymbol(context, 12, {x:this.size.width/2, y:this.size.height/2});

    return drawingCanvas;
};
