model.Game = function Game(args)
{
    if ( ! args)
        args = [];

    this.name = args.name || 'unnamed';
    this.background = args.background || null;
    this.terrain = args.terrain || [];
    this.ships = args.ships || [];

    this.type = 'Game';
}

model.Game.prototype.load = function(doc)
{
    var invalidShip = false;
    doc.ships = doc.ships.map(
        function(shipDoc)
        {
            var ship = new model.ShipInGame().loadWithDocument(shipDoc)
            if (! ship)
                invalidShip = true;

            return ship;
        });

    if (invalidShip)
        return null;

    _.extend(this, doc);
    return this;
}

model.Game.prototype.prepareForSave = function()
{

}