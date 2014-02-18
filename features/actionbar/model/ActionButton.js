model.ActionButton = function ActionButton(contents, onClick, settings)
{
    model.Button.call(this, contents, onClick, settings);

    this._selected = false;
};

model.ActionButton.prototype = Object.create(model.Button.prototype);

model.ActionButton.prototype.select = function()
{
	this._selected = true;
	this.get().addClass("selected");
};

model.ActionButton.prototype.deselect = function()
{
	this._selected = false;
	this.get().removeClass("selected");
};

model.ActionButton.prototype.isSelected = function()
{
	return this._selected;
};

