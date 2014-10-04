model.inputAction.ShowArmorMenu = function ShowArmorMenu(){};

model.inputAction.ShowArmorMenu.prototype.onActivation = function(event)
{
  jQuery('.sideMenuEntry').hide();
  jQuery('.shipDesignArmorMenu').show();
};

model.inputAction.ShowArmorMenu.prototype.onDeactivation = function(event)
{
  jQuery('.shipDesignArmorMenu').hide();
};