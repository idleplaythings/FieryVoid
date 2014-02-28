model.movement.MovementVisualizer = function MovementVisualizer(dispatcher, gameScene, animationLoop, zooming)
{
    this._gameScene = gameScene;
    this._animationLoop = animationLoop;
    this._dispatcher = dispatcher;
    this._zooming = zooming;

    this._particlePaths = [];
    this._curves = [];

    this.init();
};

model.movement.MovementVisualizer.prototype.init = function()
{
    this._dispatcher.attach('ZoomEvent', function(event) {
        this._particlePaths.forEach(function(particlePath) {
            particlePath.setZoomLevel(event.zoom);
        })
    }.bind(this));
}

model.movement.MovementVisualizer.prototype.renderPath = function(path)
{
    path.forEach(function(step) {
        this._renderMovementVisualisation(step);
    }, this);
}

model.movement.MovementVisualizer.prototype.clear = function()
{
    this._particlePaths.forEach(function(particlePath) {
        this._gameScene.removeFromScene(particlePath.get());
    }, this);

    this._particlePaths = [];
}

model.movement.MovementVisualizer.prototype._renderMovementVisualisation = function(step)
{
    var particlePath = new model.ParticlePath(step, 0x00ff00, 0);
    particlePath.setZoomLevel(this._zooming.getCurrentZoom());
    this._gameScene.addToScene(particlePath.get());
    this._animationLoop.register(particlePath);

    this._particlePaths.push(particlePath);
}
