model.MovementDisplayRoute = function Movement()
{
    this.zoom = 1;
    this.hidden = false;
    this.gameScene = null;
    this.particleCount = 1000;

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

        var size = 128 * 0.5 * this.getWaypointZoom(this.zoom);
        var distance = MathLib.distance(wp.position, pos) * this.zoom;

        if ( distance < size)
            return wp;
    }

    return null;
};

model.MovementDisplayRoute.prototype.displayRoute = function(route)
{
    var p = 0;
    for (var i in route.getRoute())
    {
        var waypoint = route.getRoute()[i];

        if (route.isInPast(waypoint))
        {
            continue;
        }

        var particle = this.particleEmitter.particles[p];
        p++;
        particle.setFromWaypoint(waypoint);
    }

    for (;p<this.particleEmitter.particles.length; p++)
    {
        this.particleEmitter.particles[p].deactivate();
    }

    this.particleEmitter.animate();
};

model.MovementDisplayRoute.prototype.getWaypointParticles = function()
{
    var particles = [];

    for (var i = 0; i<this.particleCount; i++)
    {
        particles.push(new model.MovementDisplayWaypoint());
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

    if (this.zoom > 1)
        this.hide();
    if (this.zoom <= 1)
        this.show();

    return this.getWaypointZoom(event.zoom);
};

model.MovementDisplayRoute.prototype.hide = function()
{
    if (! this.hidden)
    {
        this.particleEmitter.getObject3d().visible = false;
        this.hidden = true;
    }
};

model.MovementDisplayRoute.prototype.show = function()
{
    if (this.hidden)
    {
        this.particleEmitter.getObject3d().visible = true;
        this.hidden = false;
    }
};


model.MovementDisplayRoute.prototype.getParticle = function(time)
{
    for (var i in this.particleEmitter.particles)
    {
        var p = this.particleEmitter.particles[i];
        if (p.time == time)
            return p;
    }

    return null;
};

model.MovementDisplayRoute.prototype.setRotating = function(time)
{
    var p = this.getParticle(time);
    if (! p)
        return;

    p.rotating = true;
    this.particleEmitter.animate();
};

model.MovementDisplayRoute.prototype.setDragging = function(time)
{
    var p = this.getParticle(time);
    if (! p)
        return;

    p.dragging = true;
    this.particleEmitter.animate();
};

model.MovementDisplayRoute.prototype.setNormal = function(time)
{
    var p = this.getParticle(time);
    if (! p)
        return;

    p.dragging = false;
    p.rotating = false;
    this.particleEmitter.animate();
};
