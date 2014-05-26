model.inputAction.ModuleEditorClick = function ModuleEditorClick(selectedModuleLayout, moduleEditorService)
{
  this._moduleEditorService = moduleEditorService;
  this._selectedModuleLayout = selectedModuleLayout;
  this.disable = true;
  this.outside = false;
};

model.inputAction.ModuleEditorClick.prototype.setOnDisable = function(){
  this.disable = true;
  this.outside = false;
};

model.inputAction.ModuleEditorClick.prototype.setOnOutside = function(){
  this.disable = false;
  this.outside = true;
};

model.inputAction.ModuleEditorClick.prototype.onClick = function(event)
{
  var moduleLayout = this._selectedModuleLayout.get();

  if ( ! moduleLayout)
      return;

  var positionService = new model.ModuleLayoutPositionService(moduleLayout);
  var tile = positionService.getTileOnPosition(event.game);

  if (moduleLayout.isOutOfBounds(tile)){
    return;
  }

  if (this.disable === true){
    if (moduleLayout.isOutsideTile(tile) && ! moduleLayout.isDisabledTile(tile)){
      this._moduleEditorService.toggleOutsideTile(moduleLayout, tile);
    }
    this._moduleEditorService.toggleDisableTile(moduleLayout, tile);
  }

  if (this.outside === true && ! moduleLayout.isDisabledTile(tile)){
    this._moduleEditorService.toggleOutsideTile(moduleLayout, tile);
  }
};

