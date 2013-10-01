model.SelectedModuleDisplay = function SelectedModuleDisplay(gameScene)
{
    this.gameScene = gameScene;
    this.icon = null;
    this.module = null;
};

model.SelectedModuleDisplay.prototype.setPosition = function(pos)
{
    if (this.icon)
        this.icon.setPosition(pos);
};

model.SelectedModuleDisplay.prototype.hide = function()
{
    if (this.icon)
        this.icon.hide();
};

model.SelectedModuleDisplay.prototype.setModule = function(module)
{
    if (this.icon)
        this.gameScene.scene.remove(this.icon.getThreeObject());

    if ( ! module)
    {
        this.icon = null;
        this.module = null;
        return;
    }

    this.module = module;
    this.icon = new model.ModuleIcon(['inside', 'over']).create(module);

    this.gameScene.scene.add(this.icon.getThreeObject());
};

