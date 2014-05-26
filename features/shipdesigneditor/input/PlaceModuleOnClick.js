model.inputAction.PlaceModuleOnClick = function PlaceModuleOnClick(moduleContainer, shipContainer, shipDesignEditorService){

  this._moduleContainer = moduleContainer;
  this._shipContainer = shipContainer;
  this._shipDesignEditorService = shipDesignEditorService;

  model.inputAction.ShipEditorInputAction.call(this);
};

model.inputAction.PlaceModuleOnClick.prototype = Object.create(model.inputAction.ShipEditorInputAction.prototype);

model.inputAction.PlaceModuleOnClick.prototype.onClick = function(event){

  if ( ! this._shipContainer.get() || ! this._moduleContainer.get())
    return;

  var shipDesign = this._shipContainer.get().shipDesign;
  var module = this._moduleContainer.get();

  var positionService = new model.ShipDesignPositionService(shipDesign);
  var tile = positionService.getTileOnPosition(event.game);

  var moduleLowerLeftCorner = 
      this._getModuleOffset(module, tile);

  this._shipDesignEditorService.placeModule(moduleLowerLeftCorner, module, shipDesign);
};
