if ( typeof model === 'undefined')
  model = {};

model.ShipSpriteSide = function ShipSpriteSide(shipDesign, z, type)
{
  model.Sprite.call(this);
  this._hullLayout = shipDesign.hullLayout;
  this._type = type;
  this.z = z || -1;

  this.circle = null;
};

model.ShipSpriteSide.prototype =  Object.create(model.Sprite.prototype);

model.ShipSpriteSide.prototype.setInitialScale = function()
{
  var size = this.getSize();
  this.scale(size, size, 1);
};

model.ShipSpriteSide.prototype.getSize = function()
{
  var width = this._hullLayout.width;
  var height = this._hullLayout.height;
  var scale = 30;

  var larger = (width > height) ? width : height;
  larger *= scale*1.2;
  return larger;
};

model.ShipSpriteSide.prototype.show = function(type)
{
  this._type = type;
  this.requestImageDataToCallback();
  
  model.Sprite.prototype.show.call(this);
  return this;
};

model.ShipSpriteSide.prototype.setColor = function(context)
{
  context.lineWidth = 15;

  if (this._type == "enemy"){
    context.strokeStyle = "rgba(184,30,13,0.5)";
    context.fillStyle = "rgba(184,30,13,0.2)";
  } else {
    context.strokeStyle = "rgba(86,200,45,0.50)";
    context.fillStyle = "rgba(50,122,24,0.20)";
  }
};

model.ShipSpriteSide.prototype.requestImageDataToCallback = function()
{
  var size = this.getSize();
  var r = size / 2;
  var r1 = r * 0.5;
  var r2 = null;
  var segments = null;
  var gapratio = null;

  var circle = this.getCircle(size, r, r1, r2, segments, gapratio);

  this.receiveImageData(circle);
};

model.ShipSpriteSide.prototype.update = function(shipDesign) {};
