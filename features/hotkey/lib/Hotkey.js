if ( typeof model === 'undefined')
    model = {};

model.Hotkey = function Hotkey()
{
	this._keyCode = null;
};

model.Hotkey.prototype.matchKeyCode = function(keyCode)
{
	return this._keyCode == keyCode;
};