model.HotkeySet = function HotkeySet(hotkeys)
{
	this._hotkeys = hotkeys;
};

model.HotkeySet.prototype.getFromKeyCode = function(keyCode)
{
  console.log(this._hotkeys)
	return this._hotkeys.filter(function(hotkey){ return hotkey.matchKeyCode(keyCode);}).pop();
};