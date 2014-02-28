model.ActiveTile = function ActiveTile(dispatcher)
{
    this._dispatcher = dispatcher;
    this._tile = null;
};

model.ActiveTile.prototype.getTile = function()
{
    return this._tile;
};

model.ActiveTile.prototype.activateTile = function(tile)
{
    if (this._tile)
        this._dispatcher.dispatch({name: 'TileDeactivatedEvent', tile: this._tile});

    this._tile = tile;
    this._dispatcher.dispatch({name: 'TileActivatedEvent', tile: tile});
};