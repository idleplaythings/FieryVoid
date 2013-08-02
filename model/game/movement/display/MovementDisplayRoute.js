model.MovementDisplayRoute = function Movement()
{
    this.route = [];
    this.gameScene = null;
    this.particleCount = 100;

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
        context.fillStyle = "rgba(200,200,200,1)";

        drawingTool.drawCircleAndFill(context, 32, 32, 30);

        this.texture = drawingTool.createTexture(
            {data:context.getImageData(0, 0, size, size)});
    }

    return this.texture;
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
        var size = i === 0 || i % 10 == 0 ? 64 : 32;
        particles.push(new model.MovementDisplayWaypoint(size));
    }

    return particles;
};

model.MovementDisplayRoute.prototype.subscribeToScene = function(scene)
{
    scene.add(this.particleEmitter.getObject3d());
    return this;
};


