model.inputAction.SelectActionBar = function SelectActionBar(cssSelector)
{
  this._cssSelector = cssSelector;
}

model.inputAction.SelectActionBar.prototype.onDeactivation = function(event)
{
  jQuery(this._cssSelector).removeClass("selected");
};

model.inputAction.SelectActionBar.prototype.onActivation = function()
{   
  jQuery(this._cssSelector).addClass("selected");
};
