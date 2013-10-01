model.ModuleSprite = function ModuleSprite(module, type, z)
{
    this.module = module;
    this.type = type || 'outside';
    this.image = this.module.image.getByType(this.type);
    
    model.SpritePhong.call(this, z, 1);
};

model.ModuleSprite.prototype =  Object.create(model.SpritePhong.prototype);

model.ModuleSprite.prototype.requestImageDataToCallback = function()
{
    if ( ! this.image)
    {
        this.hide();
        return;
    }
    
    new model.CompositeImageModule(
        {imageSrc: this.image, shadow: this.type == 'over', rotation: this.module.getRotation()}
    ).getImageDataToCallback(this.receiveImageData.bind(this));

    var bumptype = this.type+'bump';
    var image = this.module.image.getByType(bumptype);

    /* TODO: Bumpmapping for modules
    if ( ! image)
        return;

    console.log(image);

    new model.CompositeImageModule(
        {imageSrc: image, shadow: false, rotation: this.module.getRotation()}
    ).getImageDataToCallback(this.receiveBumpMapData.bind(this));
    */
};

model.ModuleSprite.prototype.update = function(module)
{
    this.module = module;
    this.image = this.module.image.getByType(this.type);
    this.requestImageDataToCallback();
};

model.ModuleSprite.prototype.setInitialScale = function(data)
{
    if ( ! data)
        return;

    this.object3d.scale.set(
        data.data.width * this.module.scale,
        data.data.height * this.module.scale, 
        1
    );

    this.show();
};

model.ModuleSprite.prototype.show = function()
{
    if ( ! this.image)
        return

    model.Sprite.prototype.show.call(this);
};
