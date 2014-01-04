model.ActionButton = function ActionButton(contents, onClick, settings)
{
    model.Button.call(this, contents, onClick, settings);
};

model.ActionButton.prototype = Object.create(model.Button.prototype);


