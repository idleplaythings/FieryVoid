model.HotkeyFactory = function HotkeyFactory()
{
	this._sets = [];
};

model.HotkeyFactory.prototype.getHotkeys = function()
{
	var hotkeys = [];
	for (className in model.Hotkey) {
        hotkeys.push(new model.Hotkey[className]);
    }

    var set = new model.HotkeySet(hotkeys);
    this._sets.push(set);
    return set;
};