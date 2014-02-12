model.HotkeySet = function HotkeySet(hotkeys)
{
	this._hotkeys = hotkeys;
};

model.HotkeySet.prototype.getFromKeyCode = function(keyCode)
{
	return this._hotkeys.filter(function(hotkey){ return hotkey.matchKeyCode(keyCode);}).pop();
};