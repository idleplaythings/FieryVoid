model.GameScene = function GameScene(dispatcher){

    this.width = 1000;
    this.height = 800;
    this.camera = null;
    this.scene = new THREE.Scene();
    this.terrainScene = new THREE.Scene();
    this.renderer = null,
    this.ambientLightColor = 0xffffff,
    this.light = null;
    this.zoom = 1;
    this.ambientLight = null;
    this.animators = [];
    this.scale = 1;

    this.dispatcher = dispatcher;

    this.dispatcher.attach(new model.EventListener(
        "ScrollEvent",
        jQuery.proxy(this.onScroll, this)));

    this.dispatcher.attach(new model.EventListener(
        "ZoomEvent",
        jQuery.proxy(this.onZoom, this)));

    jQuery(window).resize(jQuery.proxy(this.resize, this));
};

model.GameScene.prototype.constructor = model.GameScene;

model.GameScene.prototype.init = function(target)
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.width = width;
    this.height = height;
    var zoom = 1;

    var camera = new THREE.OrthographicCamera(
        width / (-this.scale*2*zoom), width / (this.scale*2*zoom), height / (this.scale*2*zoom), height / (-this.scale*2*zoom), 1, 200 );

    camera.position.z = 20;

    this.camera = camera;
    this.scene.add( camera );

    this.ambientLight = new THREE.AmbientLight(this.ambientLightColor);
    this.scene.add(this.ambientLight);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( width, height );
    this.renderer.autoClear = false;

    $(this.renderer.domElement)
        .on('contextmenu', function(e){e.stopPropagation(); return false; })
        .addClass("webglCanvas").appendTo(target);
};

model.GameScene.prototype.animate = function()
{
    requestAnimationFrame( jQuery.proxy(this.animate, this) );
    this.animators.forEach(function(a){a.animate()})
    this.render();

};

model.GameScene.prototype.render = function()
{
    this.renderer.clear();
    this.renderer.render( this.terrainScene, this.camera );
    this.renderer.render( this.scene, this.camera );
};

model.GameScene.prototype.resize = function()
{
    this.zoomCamera(this.zoom);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
};

model.GameScene.prototype.zoomCamera = function(zoom)
{
    this.zoom = zoom;
    var width = window.innerWidth;
    var height = window.innerHeight;

    this.camera.left = width / (-this.scale*2*zoom);
    this.camera.right = width / (this.scale*2*zoom);
    this.camera.top = height / (this.scale*2*zoom);
    this.camera.bottom = height / (-this.scale*2*zoom);

    this.camera.updateProjectionMatrix();
};

model.GameScene.prototype.moveCameraToPosition = function(pos)
{
    this.camera.position.x = pos.x;
    this.camera.position.y = -pos.y;

    WaterLayer.light.position.x = this.camera.position.x;
    WaterLayer.light.position.y = this.camera.position.y;
};

model.GameScene.prototype.onScroll = function(event)
{
    if (event.position)
        this.moveCamera(event.position);
};

model.GameScene.prototype.onZoom = function(event)
{
    if (event.zoom)
        this.zoomCamera(event.zoom);
};

model.GameScene.prototype.moveCamera = function(pos)
{
    this.camera.position.x = pos.x/this.scale;
    this.camera.position.y = pos.y/this.scale;
};

model.GameScene.prototype.camPosInWindow = function()
{
    return {x: this.camera.position.x*this.scale, y:this.camera.position.y*this.scale};
};

model.GameScene.prototype.camPosIn3d = function()
{
    return {x: this.camera.position.x, y:this.camera.position.y};
};

model.GameScene.prototype.camPosInGame = function()
{
    return {x: this.camera.position.x * 2, y:this.camera.position.y * -2};
};
