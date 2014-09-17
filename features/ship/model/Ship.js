model.Ship = function Ship(args, timeline)
{
  this.icon = null;
  this.setState(args, timeline);
};

model.Ship.prototype.setState = function(args, timeline)
{
	if ( ! args)
    args = {};

  this._id = args._id || null;
  this.fleetId = args.fleetId || null;
  this.gameId = args.gameId || null;

  this.shipDesign = args.shipDesign || null;

  this.timeline = timeline;

  return this;
};

model.Ship.prototype.serialize = function()
{
	var shipDesign = new model.ShipDesign(this.shipDesign);
	shipDesign.hullLayoutId = this.shipDesign.hullLayout._id;
	delete shipDesign.hullLayout;
	shipDesign.modules =
  this.shipDesign.modules.map(
    function(module){
      return module.serialize();
    }
  );


  var doc = {
    shipDesign: shipDesign,
    fleetId: this.fleetId,
    gameId: this.gameId,
    timeline: this.timeline._id
  }

  if (this._id !== null)
    doc._id = this._id;

  return doc;
};

model.Ship.prototype.getIcon = function()
{
  return this.icon;
};

model.Ship.prototype.setIcon = function(shipIcon)
{
  this.icon = shipIcon;
  this.icon.create(this.shipDesign);
};

model.Ship.prototype.getDamage = function()
{
  return new model.damage.ShipDamageStatus(this.timeline);
};

model.Ship.prototype.getMovement = function()
{
  return new model.movement.ShipMovementStatus(this.timeline);
};

model.Ship.prototype.getWeaponStatus = function()
{
  return new model.weapon.ShipWeaponStatus(this.timeline);
};

model.Ship.prototype.getPowerStatus = function()
{
  return new model.power.ShipPowerStatus(this.shipDesign.modules);
};

model.Ship.prototype.getStatus = function()
{
  return new model.ShipStatus(this.timeline);
};

model.Ship.prototype.getModules = function()
{
  return this.shipDesign.modules.map(function(moduleLayout){
    return this._createModuleFromModuleLayout(moduleLayout);
  }, this);
};

model.Ship.prototype.getModuleById = function(id)
{
  return this.getModules().filter(function(module){
    return module._id === id;
  }).pop();
};

model.Ship.prototype.getWeapons = function(){
  return this.getModules().filter(function(module){
    return module.isWeapon();
  });
};

model.Ship.prototype.getModuleOnPosition = function(tile)
{
  var moduleLayout = this.shipDesign.getModuleInPosition(tile);

  if (! moduleLayout)
    return null;

  return this._createModuleFromModuleLayout(moduleLayout);
};

model.Ship.prototype._createModuleFromModuleLayout = function(moduleLayout)
{
  return new model.Module(
    moduleLayout,
    this.getPowerStatus(),
    this.getWeaponStatus()
  );
};

model.Ship.prototype.select = function()
{
  this.getIcon().select();
};

model.Ship.prototype.deselect = function()
{
  this.getIcon().deselect();
};

model.Ship.prototype.animate = function(gameTime)
{
  this.status.managers.movement.animate(gameTime);
};

model.Ship.prototype.setAzimuth = function(azimuth)
{
  this.getIcon().getThreeObject().rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, -azimuth));
};

model.Ship.prototype.getAzimuth = function()
{
  this.getIcon().getAzimuth();
};

model.Ship.prototype.isHidden = function()
{
  return this.getIcon().hidden;
};

model.Ship.prototype.getPosition = function()
{
  return this.getIcon().getPosition();
};

model.Ship.prototype.setPosition = function(pos)
{
  if ( ! pos)
    this.getIcon().hide();
  else
    this.getIcon().setPosition(pos);
};
