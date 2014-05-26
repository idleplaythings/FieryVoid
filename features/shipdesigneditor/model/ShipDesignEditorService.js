model.ShipDesignEditorService = function ShipDesignEditorService(){};

model.ShipDesignEditorService.prototype.placeModule = function(tile, module, shipDesign) {
  if ( ! this.isValidPosition(tile, module, shipDesign))
    return false;

  Meteor.call(
    'ShipDesignAddModule',
    shipDesign._id, module._id, module.direction, tile,
    function(err, result){}
  );
};

model.ShipDesignEditorService.prototype.isValidPosition = function(tile, module, shipDesign){
  for (var x = 0; x < module.getWidth(); x++)
  {
    for (var y = 0; y < module.getHeight(); y++)
    {
      if ( ! this.isValidTileForPosition(module, shipDesign, tile, {x:x, y:y}))
      {
          return false;
      }
    }
  }

  return true;
};

model.ShipDesignEditorService.prototype.isValidTileForPosition = function(module, shipDesign, cornerTile, tile){
  var hullLayout = shipDesign.hullLayout;
  var hullLayoutPos = {x: cornerTile.x + tile.x, y: cornerTile.y + tile.y};

  if (module.isDisabledTile(tile))
    return true;

  var hullDisabledTile = hullLayout.isUnavailableTile(hullLayoutPos);
  var outsideTile = module.isOutsideTile(tile);

  if (outsideTile != hullDisabledTile)
    return false;

  if ( ! outsideTile && module.tileHeight > hullLayout.getTileHeight(hullLayoutPos))
    return false;

  if (shipDesign.getModuleInPosition(hullLayoutPos))
    return false;

  return true;
};

/*


model.ModuleLayout.prototype.isValidTileForPosition  = function(
    ship, pos, tilePos)
{
    var hullLayout = ship.hullLayout;
    var hullLayoutPos = {x: pos.x + tilePos.x, y: pos.y + tilePos.y};

    if (this.isDisabledTile(tilePos))
        return true;

    var hullDisabledTile = hullLayout.isUnavailableTile(hullLayoutPos);
    var outsideTile = this.isOutsideTile(tilePos);

    if (outsideTile != hullDisabledTile)
        return false;

    if ( ! outsideTile && this.tileHeight > hullLayout.getTileHeight(hullLayoutPos))
        return false;

    if (ship.getModuleInPosition(hullLayoutPos))
        return false;

    return true;
};

/*
model.ShipDesign.prototype.removeModule = function(pos)
{
    var module = this.getModuleInPosition(pos);
    if ( ! module)
        return;

    Meteor.call(
        'ShipDesignRemoveModule',
        this._id, module._id, module.position,
        function(err, result){}
    );
};

model.ShipDesign.prototype.placeModule = function(module, pos)
{
    if ( ! module.isValidPosition(this, pos))
        return false;

    Meteor.call(
        'ShipDesignAddModule',
        this._id, module._id, module.direction, pos,
        function(err, result){}
    );
};
*/