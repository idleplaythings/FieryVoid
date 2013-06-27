model.ShipInGame = function ShipInGame(args)
{
    if ( ! args)
        args = [];

    this._id = args._id || null;
    this.position = args.position || null;
    this.detectionStatus = args.detectionStatus || null;
    this.controller = args.controller || null;
    this.shipDesign = args.shipDesign || null;
}

model.ShipInGame.prototype.loadWithDocument = function(doc)
{
    doc.shipDesign = model.ShipDesignInGame.loadWithDocument(doc.shipDesign);
    if ( ! doc.shipDesign)
        return null;

    _.extend(this, doc);
    return this;
}
