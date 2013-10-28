if ( typeof model === 'undefined')
    model = {};

model.ShipSpriteSilhouette = function ShipSpriteSilhouette(shipDesign, z)
{
    model.ShipSprite.call(this, shipDesign.hullLayout, z);
    this.shipDesign = shipDesign;
};

model.ShipSpriteSilhouette.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteSilhouette.prototype.requestImageDataToCallback = function()
{
    new model.CompositeImageShipSilhouette(this.shipDesign)
        .getImageDataToCallback(this.receiveImageData.bind(this));
};

model.ShipSpriteSilhouette.prototype.update = function(shipDesign)
{
    model.ShipSprite.prototype.update.call(this, shipDesign);

    this.shipDesign = shipDesign;

    new model.CompositeImageShipSilhouette(this.shipDesign)
        .getImageDataToCallback(this.receiveImageData.bind(this));
};

model.ShipSpriteSilhouette.prototype.receiveImageData = function(data)
{
    model.ShipSprite.prototype.receiveImageData.call(this, data);
    this.setInitialScale(data);
};

model.ShipSpriteSilhouette.prototype.setInitialScale = function(data)
{
    if ( ! data)
        return;

    this.object3d.scale.set(
        data.data.width,
        data.data.height,
        1
    );
};
