model.inputAction.RemoveModuleOnClick = function RemoveModuleOnClick(shipContainer, shipDesignEditorService){

  this._shipContainer = shipContainer;
  this._shipDesignEditorService = shipDesignEditorService;

  model.inputAction.ShipEditorInputAction.call(this);
};

model.inputAction.RemoveModuleOnClick.prototype = Object.create(model.inputAction.ShipEditorInputAction.prototype);

model.inputAction.RemoveModuleOnClick.prototype.onClick = function(event){

  if ( ! this._shipContainer.get())
    return;

  var shipDesign = this._shipContainer.get().shipDesign;

  var positionService = new model.ShipDesignPositionService(shipDesign);
  var tile = positionService.getTileOnPosition(event.game);

  this._shipDesignEditorService.removeModule(tile, shipDesign);
};
