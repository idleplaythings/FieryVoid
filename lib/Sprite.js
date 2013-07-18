model.Sprite = function Sprite()
{

};

model.Sprite.prototype.setAzimuth = function(azimuth)
{
    this.sprite.rotation3d = new THREE.Vector3( 1, 0, 0 );
    //this.sprite.rotation  = MathLib.degreeToRadian(MathLib.addToAzimuth(360, -azimuth));
};