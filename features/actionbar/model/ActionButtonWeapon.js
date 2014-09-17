model.ActionButtonWeapon = function ActionButtonWeapon(ship, module, dispatcher)
{
	this._ship = ship;
	this._module = module;
	this._dispatcher = dispatcher;
	this._selected = false;

	model.ActionButton.call(
		this,
		'',
		this.onWeaponClick.bind(this),
		{}
	);

	this.get().css({
		'background-image': 'url('+module.getImageByType('ui')+')'
	});
};

model.ActionButtonWeapon.prototype = Object.create(model.ActionButton.prototype);

model.ActionButtonWeapon.prototype.onWeaponClick = function()
{
	this._dispatcher.dispatch({name: 'WeaponClickedEvent', module: this._module, ship: this._ship});
};

model.ActionButtonWeapon.prototype.owns = function(modules)
{
	return modules.filter(function(module){
		return module.equals(this._module);
	}, this).pop();
};

model.ActionButtonWeapon.prototype.activate = function(){
	if (this.get().hasClass("fireOrder"))
			return;

	console.log("activate", this.get());
	this.get().css({
		'background-image': 'url(/misc/fireOrder.png), url('+this._module.getImageByType('ui')+')'
	});
	this.get().addClass("fireOrder");
};

model.ActionButtonWeapon.prototype.deactivate = function(){
	console.log("deactivate");
	this.get().css({
		'background-image': 'url('+this._module.getImageByType('ui')+')'
	});
	this.get().removeClass("fireOrder");
};

model.ActionButtonWeapon.prototype.onMouseover = function()
{
	this._dispatcher.dispatch({name: "MouseOverWeaponEvent", module: this._module, ship: this._ship});
};

model.ActionButtonWeapon.prototype.onMouseout = function()
{
	this._dispatcher.dispatch({name: "MouseOutWeaponEvent", module: this._module, ship: this._ship});
};