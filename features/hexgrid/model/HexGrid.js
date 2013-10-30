model.HexGrid = function HexGrid(renderer, eventDispatcher)
{
    this._renderer = renderer;
    this._eventDispatcher = eventDispatcher;
};

model.HexGrid.prototype.init = function()
{
    this._eventDispatcher.attach('scene.init', function(event) {
        this.renderGrid(event.scene);
    }.bind(this));
};

model.HexGrid.prototype.renderGrid = function(scene)
{
    this._renderer.renderGrid(scene);
};
