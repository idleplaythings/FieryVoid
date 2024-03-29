model.inputAction.EditorShipHullVisibility = function EditorShipHullVisibility(dispatcher, editorShip, enforceHidden, enforceVisible)
{
	this._editorShip = editorShip;
	this._enforceHidden = enforceHidden;
	this._enforceVisible = enforceVisible;

	if (this._enforceVisible && this._enforceHidden)
		throw new Error("You may not enforce both visible and hidden.");

	this._dispatcher = dispatcher;
	this._callback = null;
};

model.inputAction.EditorShipHullVisibility.prototype.onActivation = function(event, inputMode, inputState)
{
	if (this._enforceHidden)
		this._editorShip.hideHull();

	if (this._enforceVisible)
		this._editorShip.showHull();
	

	inputState.set('hullVisible', this._editorShip.isHullVisible());
	this._callback = this._dispatcher.attach('EditorToggleHullViewModeEvent', this.toggle.bind(this, inputState));
};

model.inputAction.EditorShipHullVisibility.prototype.onDeactivation = function()
{
	this._dispatcher.detach('EditorToggleHullViewModeEvent', this._callback);
};

model.inputAction.EditorShipHullVisibility.prototype.toggle = function(inputState)
{
	if (this._enforceHidden || this._enforceVisible)
		return;

	this._editorShip.toggleHullVisibility();

	inputState.set('hullVisible', this._editorShip.isHullVisible());
};
