model.MovementDisplayRoute = function Movement()
{
    this.zoom = 1;
    this.gameScene = null;
    this.particleCount = 1000;

    this.turnWaypointSize = 128;
    this.intermediateWaypointSize = 64;

    this.texture = null;
    this.particleEmitter = new model.ParticleEmitter(
        this.getWaypointParticles(),
        {
            texture: this.getWaypointTexture()
        }
    );
};

model.MovementDisplayRoute.prototype.getWaypointTexture = function()
{
    if ( ! this.texture )
    {
        var size = 64;
        var drawingTool = Tools.getCanvasDrawingTool();
        var drawingCanvas =
            $('<canvas width="'+size+'" height="'+size+'"></canvas>').get(0);

        var context = drawingCanvas.getContext("2d");
        context.strokeStyle = "rgba(255,255,255,1)";
        context.fillStyle = "rgba(255,255,255,0.5)";

        drawingTool.drawCircleAndFill(context, 32, 32, 20);
        drawingTool.drawArrowHeadOnCircle(context, 32, 32, 20, 28, 45);

        this.texture = drawingTool.createTexture(
            {data:context.getImageData(0, 0, size, size)});
    }

    return this.texture;
};

model.MovementDisplayRoute.prototype.getWaypointInPosition = function(pos, route)
{
    for (var i in route)
    {
        var wp = route[i];
        if (wp.time % 10 !== 0 || wp.extrapolation)
            continue;

        var size = this.turnWaypointSize * 0.5 * (1 / this.getWaypointZoom(this.zoom));
        if (MathLib.distance(wp.position, pos) < size)
            return wp;
    }

    return null;
};

model.MovementDisplayRoute.prototype.displayRoute = function(route)
{
    for (var i = 1; i<route.length; i++ )
    {
        var waypoint = route[i];
        var particle = this.particleEmitter.particles[i];
        particle.setFromWaypoint(waypoint);
    }

    this.particleEmitter.animate();
};

model.MovementDisplayRoute.prototype.getWaypointParticles = function()
{
    var particles = [];

    for (var i = 0; i<this.particleCount; i++)
    {
        var size = i === 0 || i % 10 == 0 ? this.turnWaypointSize : this.intermediateWaypointSize;
        particles.push(new model.MovementDisplayWaypoint(size));
    }

    return particles;
};

model.MovementDisplayRoute.prototype.getWaypointZoom = function(zoom)
{
    if (zoom > 1)
        return 1;

    if (zoom < 0.2)
        return 0.2;

    return zoom;
};

model.MovementDisplayRoute.prototype.subscribeToScene = function(scene, eventDispatcher)
{
    scene.add(this.particleEmitter.getObject3d());
    this.particleEmitter.observeZoomLevelChange(eventDispatcher, this._zoomLevelChangeCallback.bind(this));
    return this;
};

model.MovementDisplayRoute.prototype._zoomLevelChangeCallback = function(event)
{
    this.zoom = event.zoom;
    return this.getWaypointZoom(event.zoom);
};

model.MovementDisplayRoute.prototype.setRotating = function(time)
{
    console.log("rotate: "  + time);
    this.particleEmitter.particles[time].rotating = true;
    this.particleEmitter.animate();
};

model.MovementDisplayRoute.prototype.setDragging = function(time)
{
    console.log("drag: "  + time);
    this.particleEmitter.particles[time].dragging = true;
    this.particleEmitter.animate();
};

model.MovementDisplayRoute.prototype.setNormal = function(time)
{
    console.log("normal: "  + time);
    this.particleEmitter.particles[time].dragging = false;
    this.particleEmitter.particles[time].rotating = false;
    this.particleEmitter.animate();
};
