model.ShipLayout = function ShipLayout(args)
{
    if (! args.hullName)
        throw "Ship layout needs hullName";

    this.width = args.width | 90;
    this.height = args.height | 27;
    this.tileScale = args.tileScale | 30;

    this.hullName = args.hullName;
};

/*
 Animal = function (doc) {
 _.extend(this, doc);
 };
 _.extend(Animal.prototype, {
 makeNoise: function () {
 console.log(this.sound);
 }
 });
 */
