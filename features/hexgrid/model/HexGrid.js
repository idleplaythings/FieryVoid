model.HexGrid = function HexGrid(renderer, eventDispatcher)
{
    this._renderer = renderer;
    this._eventDispatcher = eventDispatcher;
};

model.HexGrid.prototype.init = function()
{
    this._eventDispatcher.attach('scene.init', this.onSceneInit.bind(this));
};

model.HexGrid.prototype.onSceneInit = function(event)
{
    this._renderer.renderGrid(event.scene);
};
