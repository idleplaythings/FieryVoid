model.Hotkey.Cancel = function Cancel()
{
	model.Hotkey.call(this);
	this._keyCode = 27; //Esc
};

model.Hotkey.Cancel.prototype = Object.create(model.Hotkey.prototype);