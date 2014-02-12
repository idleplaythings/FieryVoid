model.Hotkey.Left = function Left()
{
	model.Hotkey.call(this);
	this._keyCode = 37; //Left arrow
};

model.Hotkey.Left.prototype = Object.create(model.Hotkey.prototype);