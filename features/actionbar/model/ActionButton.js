model.ActionButton = function ActionButton(contents, onClick, settings)
{
    model.Button.call(this, contents, onClick, settings);
};

model.ActionButton.prototype = Object.create(model.Button.prototype);

model.ActionButton.prototype.select = function()
{
	this.get().addClass("selected");
};

model.ActionButton.prototype.deselect = function()
{
	this.get().removeClass("selected");
};
