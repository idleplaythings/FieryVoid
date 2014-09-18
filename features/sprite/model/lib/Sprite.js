if ( typeof model === 'undefined')
  model = {};

model.Sprite = function Sprite(z)
{
  this.z = z || 0;
  this.object3d = null;
  this.hidden = false;
};

model.Sprite.prototype.createTexture = function(image, nearest)
{
  var texturedata = {
    data : new Uint8Array(image.data.data.buffer),
    height: image.data.height,
    width: image.data.width
  };

  var tex = new THREE.DataTexture(null, image.data.width, image.data.height);
  if (nearest)
  {
    tex.generateMipmaps = false;
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
  }
  else
  {
		tex.magFilter = THREE.LinearFilter; //THREE.NearestFilter;
		tex.minFilter = THREE.LinearFilter; //THREE.NearestMipMapNearestFilter;
	}

  tex.image = texturedata;
  tex.needsUpdate = true;

  return tex;
};

model.Sprite.prototype.getObject3d = function()
{
  if (! this.object3d )
  {
    this.object3d = this.createObject3d();
    this.requestImageDataToCallback();
  }

  return this.object3d;
};

model.Sprite.prototype.hide = function()
{
  this.getObject3d().traverse(function (object){
    object.visible = false;
  });

  this.hidden = true;

  return this;
};

model.Sprite.prototype.show = function()
{
  this.getObject3d().traverse(function (object){
    object.visible = true;
  });

  this.hidden = false;

  return this;
};

model.Sprite.prototype.setZPosition = function(z)
{
  var cur = this.getObject3d().position;
  this.getObject3d().position = new THREE.Vector3(cur.x, cur.y, z);
  return this;
};

model.Sprite.prototype.setPosition = function(pos)
{
  this.getObject3d().position = new THREE.Vector3(pos.x, pos.y, this.z);
  return this;
};

model.Sprite.prototype.setInitialScale = function()
{
};

model.Sprite.prototype.createObject3d = function(texture)
{
  var geometry = new THREE.PlaneGeometry(1,1,1,1);

  if (! texture)
    texture = new THREE.DataTexture(null, 0, 0);

  var material = new THREE.MeshBasicMaterial(
  {
    map: texture,
    transparent: true
  });

  var mesh = new THREE.Mesh(geometry, material);

  mesh.position = new THREE.Vector3(0, 0, this.z);
  return mesh;
};

model.Sprite.prototype.scale = function(width, height)
{
  this.object3d.scale.set(
    width,
    height,
    1
  );
};

model.Sprite.prototype.getCircle = function(size, r, r1, r2, segments, gapratio)
{
  var drawingTool = Tools.getCanvasDrawingTool();

  var drawingCanvas =
  $('<canvas width="'+size+'" height="'+size+'"></canvas>').get(0);

  var context = drawingCanvas.getContext("2d");

  this.setColor(context);

  if (! segments || ! gapratio)
  {
    if ( ! r2)
    {
      drawingTool.drawCircleAndFill(context, r, r, r1);
    }
    else
    {
      drawingTool.drawHollowCircleAndFill(context, r, r, r1, r2);
    }
  }
  else
  {
    drawingTool.drawDottedCircle(context, r, r, r1, r2, segments, gapratio);
  }
  return {data:context.getImageData(0, 0, size, size)};
};

model.Sprite.prototype.getArrow = function(size)
{
  var drawingTool = Tools.getCanvasDrawingTool();

  var drawingCanvas =
  $('<canvas width="'+size+'" height="'+size+'"></canvas>').get(0);

  var context = drawingCanvas.getContext("2d");

  var rad = size/2;
  this.setColor(context);
  drawingTool.drawArrowHeadOnCircle(context, rad, rad, rad*0.8, rad, 60)

  return this.createObject3d(this.createTexture({data:context.getImageData(0, 0, size, size)}));
};

model.Sprite.prototype.setColor = function(context)
{
  //context.strokeStyle = "rgba(184,30,13,0.5)";
  //context.fillStyle = "rgba(184,30,13,0.2)";

  context.strokeStyle = "rgba(86,200,45,0.60)";
  context.fillStyle = "rgba(50,122,24,0.50)";
};

model.Sprite.prototype.receiveImageData = function(data)
{
  this.object3d.material.map = this.createTexture(data);
  this.setInitialScale(data);
};
