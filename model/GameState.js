model.GameState = function GameState()
{
    this.ships = [];
};

model.GameState.prototype.getShipById = function(id)
{
    if ( ! this.ships[id])
        throw "GameState: Ship id: '"+id+" not found.";

    return this.ships[id];
};
