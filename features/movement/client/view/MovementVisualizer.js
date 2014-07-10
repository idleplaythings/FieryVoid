model.movement.MovementVisualizer = function MovementVisualizer(dispatcher, gameScene, zooming)
{
    this._gameScene = gameScene;
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
    var length = path.length;
    for (var i in path){
        var step = path[i];
        var offset = 1/length * i;
        this._renderMovementVisualisation(step, offset, length)
    }
}

model.movement.MovementVisualizer.prototype.clear = function()
{
    this._particlePaths.forEach(function(particlePath) {
        this._gameScene.removeFromScene(particlePath.get());
    }, this);

    this._particlePaths = [];
}

model.movement.MovementVisualizer.prototype.animate = function(turn, shipAnimatinoDetails)
{
    this._particlePaths.forEach(function(particlePath){
        particlePath.animate(turn, shipAnimatinoDetails);
    })
};

model.movement.MovementVisualizer.prototype._renderMovementVisualisation = function(step, offset, length)
{
    var particlePath = new model.ParticlePath(step, 0x00ff00, 0, offset, length);
    particlePath.setZoomLevel(this._zooming.getCurrentZoom());
    this._gameScene.addToScene(particlePath.get());

    this._particlePaths.push(particlePath);
};
