model.Hotkey.Right = function Right()
{
	model.Hotkey.call(this);
	this._keyCode = 39; //Right arrow
};

model.Hotkey.Right.prototype = Object.create(model.Hotkey.prototype);