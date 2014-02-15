model.ShipPositionService = function ShipPositionService(ship, turn)
{
    model.ShipDesignPositionService.call(
        this,
        ship.shipDesign,
        ship.status.managers.movement.getScenePositionAtTurn(turn),
        ship.status.managers.movement.getSceneFacingAtTurn(turn)
    );

    this._ship = ship;
};

model.ShipPositionService.prototype = Object.create(model.ShipDesignPositionService.prototype);