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

model.movement.PathRenderer.prototype.highlightRouteSegment = function(index){
    if ( ! this._curves[index])
        return;
    
    this._curves[index].material.color = new THREE.Color(0xffffff);
};

model.movement.PathRenderer.prototype.unhighlightRouteSegment = function(index){
    if ( ! this._curves[index])
        return;

    this._curves[index].material.color = new THREE.Color(0x005500);
};

model.movement.PathRenderer.prototype.getStepIndexOnPosition = function(scenePosition){
    for (var i in this._curves){
        if (this._curves[i].pointIsOnCurve(scenePosition))
            return i;
    }

    return null;
};

model.movement.PathRenderer.prototype.renderPath = function(path)
{
    this._removeFromScene();

    path.forEach(function(step) {
        this._renderPathStep(step);
    }, this);

    this.clearHighlight();
    this.showPath();
};

model.movement.PathRenderer.prototype.hidePath = function(path)
{
    this._curves.forEach(function(curve) {
        curve.hide();
    }, this);
};

model.movement.PathRenderer.prototype.showPath = function(path)
{
    this._curves.forEach(function(curve) {
        curve.show();
    }, this);
};

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
        curve.material.opacity = 0.6
        curve.mesh.position.z = 10;
    }, this);
}

model.movement.PathRenderer.prototype.clearHighlight = function()
{
    this._curves.forEach(function(curve) {
        curve.material.opacity = 0.4
        curve.mesh.position.z = -30;
    }, this);
}

model.movement.PathRenderer.prototype._renderPathStep = function(step)
{
    var curve = new model.Curve(step, 0x005500);
    this._gameScene.addToScene(curve.get());
    this._curves.push(curve);
}

model.movement.PathRenderer.prototype._removeFromScene = function(step)
{
    this._curves.forEach(function(curve){
        this._gameScene.removeFromScene(curve.get());
    }, this);
    this._curves = [];
};
