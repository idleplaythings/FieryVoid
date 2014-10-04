model.ShipStatusSymbolScanner = function ShipStatusSymbolScanner(ew)
{
  model.ShipStatusSymbol.call(this);
  this.deploymentPosition = 'top';
  this.size = {width:45, height:45};
  this.ewGenerated = ew;
  this.description = 'Generates ' + this.ewGenerated + " electronic warfare";

  this.iconSize = {width:1, height:1};
};

model.ShipStatusSymbolScanner.prototype =
Object.create(model.ShipStatusSymbol.prototype);

model.ShipStatusSymbolScanner.prototype.createIconImage = function()
{
  var drawingCanvas = this.getCanvas();
  var context = drawingCanvas.getContext('2d');

  context.lineWidth = 2;
  context.strokeStyle = "rgba(0,0,0,1)";
  context.fillStyle = "rgba(255,255,255,1)";

  this.drawScannerSymbol(context, 20, {x:this.size.width/2, y:this.size.height/2});

  return drawingCanvas;
};

model.ShipStatusSymbolScanner.prototype.drawScannerSymbol = function(context, size, center)
{
  context.beginPath();
  context.moveTo(center.x - size*0.3, center.y + size*0.3);
  context.lineTo(center.x - size, center.y - size*0.5);


  context.bezierCurveTo(
    center.x-size, center.y-size,
    center.x+size, center.y-size,
    center.x + size, center.y - size*0.5
  );
  
  
  //context.lineTo(center.x + size, center.y - size*0.8);
  
  context.lineTo(center.x + size*0.3, center.y + size*0.3);
  
  context.bezierCurveTo(
    center.x + size*0.3, center.y,
    center.x - size*0.3, center.y,
    center.x - size*0.3, center.y + size*0.3
  );
  
  context.closePath();
  this.strokeAndFillWithShadow(context);


  context.beginPath();
  context.arc(center.x, center.y+size*0.5, size*0.3, 0, 2*Math.PI);
  context.closePath();
  
  this.strokeAndFillWithShadow(context);

  context.lineWidth = 4;
  context.font = '14pt Helvetica';
  this.drawString(context, this.ewGenerated, center);
};
