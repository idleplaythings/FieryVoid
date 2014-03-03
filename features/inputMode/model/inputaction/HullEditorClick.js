model.inputAction.HullEditorClick = function HullEditorClick(selectedHullLayout, height, hullEditorService)
{
    this._hullEditorService = hullEditorService;
	this._selectedHullLayout = selectedHullLayout;
	this._height = height;
};

model.inputAction.HullEditorClick.prototype.onClick = function(event)
{
	var hullLayout = this._selectedHullLayout.get();

    if ( ! hullLayout)
        return;

    var positionService = new model.HullLayoutPositionService(hullLayout);
    var tile = positionService.getTileOnPosition(event.game);

    var curHeight = hullLayout.getTileHeight(tile);

    if (this._height == curHeight || hullLayout.isDisabledTile(tile))
    {
        this._hullEditorService.toggleDisabledTile(hullLayout, tile);
    }
    else
    {
        this._hullEditorService.setTileHeight(hullLayout, tile, this._height);
    }
};

