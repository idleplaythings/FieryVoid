model.GameScene = function GameScene(dispatcher)
{
    this.width = 1000;
    this.height = 800;
    this.camera = null;
    this.scene = null;
    this.renderer = null,
    this.ambientLightColor = 0xffffff,
    this.light = null;
    this.zoom = 1;
    this.ambientLight = null;
    this.animators = [];
    this.scale = 1;

    this.gameTime = 0;

    this.target = null;
    this.dispatcher = dispatcher;
};

model.GameScene.prototype.constructor = model.GameScene;

model.GameScene.prototype.init = function(target)
{
    this.target = target;
    jQuery(window).resize(this.resize.bind(this));
    this.dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
    this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));

    var width = this.target.innerWidth();
    var height = this.target.innerHeight();
    this.width = width;
    this.height = height;
    var zoom = 1;

    var camera = new THREE.OrthographicCamera(
        width / (-this.scale*2*zoom), width / (this.scale*2*zoom), height / (this.scale*2*zoom), height / (-this.scale*2*zoom), 1, 200 );

    camera.position.z = 20;

    this.camera = camera;
    this.scene = new THREE.Scene();
    this.scene.add( camera );

    this.light = new THREE.DirectionalLight(0xffffff, 10);
    this.light.position.set( 50000, 50000, -1 );
    this.scene.add( this.light );

    this.ambientLight = new THREE.AmbientLight(this.ambientLightColor);
    this.scene.add(this.ambientLight);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( width, height );
    //this.renderer.autoClear = false;

    $(this.renderer.domElement)
        .on('contextmenu', function(e){e.stopPropagation(); return false; })
        .addClass("webglCanvas").appendTo(this.target);

    this.dispatcher.dispatch({
        name: 'scene.init',
        scene: this.scene
    });

    return this;
};

model.GameScene.prototype.animate = function(displayTime)
{
    this.animators.forEach(function(a){
        a.animate(displayTime);
    });

    this.render();
};

model.GameScene.prototype.removeAnimator = function(object)
{
	this.animators = this.animators.filter(function(animanatee){
		return animanatee != object;
	});
};

model.GameScene.prototype.render = function()
{
    this.renderer.render( this.scene, this.camera );
};

model.GameScene.prototype.resize = function()
{
    this.zoomCamera(this.zoom);
    this.width = this.target.innerWidth();
    this.height = this.target.innerHeight();

    this.renderer.setSize(this.width, this.height);
};

model.GameScene.prototype.zoomCamera = function(zoom)
{
    this.zoom = zoom;
    var width = this.width;
    var height = this.height;

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
