model.inputAction.ShipEditorInputAction = function ShipEditorInputAction(){};

model.inputAction.ShipEditorInputAction.prototype._getModuleOffset = function(module, pos)
{
    return {
        x: pos.x - Math.floor(module.getWidth()/ 2),
        y: pos.y - Math.floor(module.getHeight()/ 2)
    }
};