model.inputAction.PlaceArmorOnClick = function PlaceArmorOnClick(armorContainer, shipContainer, shipDesignEditorService){

  this._armorContainer = armorContainer;
  this._shipContainer = shipContainer;
  this._shipDesignEditorService = shipDesignEditorService;

  model.inputAction.ShipEditorInputAction.call(this);
};

model.inputAction.PlaceArmorOnClick.prototype = Object.create(model.inputAction.ShipEditorInputAction.prototype);

model.inputAction.PlaceArmorOnClick.prototype.onClick = function(event){

  if ( ! this._shipContainer.get())
    return;

  var armor = this._armorContainer.get();
  var shipDesign = this._shipContainer.get().shipDesign;

  var positionService = new model.ShipDesignPositionService(shipDesign);
  var tile = positionService.getTileOnPosition(event.game);
  var tilePosition = positionService.getClosestTilePositionInScene(event.game);

  var offset = getSide({x: event.game.x - tilePosition.x, y: event.game.y - tilePosition.y});
  var otherTile = {x: tile.x + offset.x, y: tile.y + offset.y};


  console.log(armor);
  console.log(tile, otherTile);
  //console.log(event.game, tile, tilePosition);

  this._shipDesignEditorService.placeArmor(tile, otherTile, armor, shipDesign);
};

var getSide = function(offset){

  var gridSize = 30;

  var list = [
    {name: 'top',     offset:{x:0, y:1}, distance: Math.abs(gridSize - offset.y)},
    {name: 'right',   offset:{x:1, y:0}, distance: Math.abs(gridSize - offset.x)},
    {name: 'bottom',  offset:{x:0, y:-1}, distance: Math.abs(offset.y)},
    {name: 'left',    offset:{x:-1, y:0}, distance: Math.abs(offset.x)},
  ];

  list.sort(function(a, b){
    return b.distance - a.distance;
  })
  
  var entry = list.pop();
  console.log(entry.name);
  return entry.offset;
};