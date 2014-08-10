model.HotkeyFactory = function HotkeyFactory()
{
	this._sets = [];
};

model.HotkeyFactory.prototype.getHotkeys = function()
{
	  var hotkeys = [];
	  for (className in model.Hotkey) {

        var hotkey = new model.Hotkey[className];
        if (hotkey.isHotkey && hotkey.isHotkey())
          hotkeys.push(hotkey);
    }

    var set = new model.HotkeySet(hotkeys);
    this._sets.push(set);
    return set;
};