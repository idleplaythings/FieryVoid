model.movement.PathRenderer = function PathRenderer(dispatcher, gameScene, animationLoop)
{
    this._gameScene = gameScene;
    this._animationLoop = animationLoop;
    this._dispatcher = dispatcher;

    this._particlePaths = [];
    this._curves = [];

    this.init();
};

model.movement.PathRenderer.prototype.init = function()
{
}

model.movement.PathRenderer.prototype.renderPath = function(path)
{
    path.forEach(function(step) {
        this._renderPathStep(step);
    }, this);
}

model.movement.PathRenderer.prototype.clear = function()
{
    this._curves.forEach(function(curve) {
        this._gameScene.removeFromScene(curve.get());
    }, this);

    this._curves = [];
}

model.movement.PathRenderer.prototype.highlight = function()
{
    this._curves.forEach(function(curve) {
        curve.material.opacity = 0.8
    }, this);
}

model.movement.PathRenderer.prototype.clearHighlight = function()
{
    this._curves.forEach(function(curve) {
        curve.material.opacity = 0.4
    }, this);
}

model.movement.PathRenderer.prototype._renderPathStep = function(step)
{
    var curve = new model.Curve(step, 0x005500);
    this._gameScene.addToScene(curve.get());
    this._curves.push(curve);
}
