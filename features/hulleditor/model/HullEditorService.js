model.HullEditorService = function HullEditorService(){}

model.HullEditorService.prototype.toggleDisabledTile = function(hullLayout, tile){
  if (hullLayout.isOutOfBounds(tile))
    return;

  Meteor.call(
    'HullLayoutToggleDisabled',
    hullLayout._id,
    hullLayout.getTileIndex(tile),
    function(err, result){}
  );
};

model.HullEditorService.prototype.setTileHeight = function(hullLayout, tile, height){
  if (hullLayout.isOutOfBounds(tile))
    return;

  Meteor.call(
    'HullLayoutSetTileHeight',
    hullLayout._id,
    hullLayout.getTileIndex(tile),
    height,
    function(err, result){}
  );
};

model.HullEditorService.prototype.update = function(hullLayout, name, value){
  if ( ! hullLayout[name])
    return;

  if (hullLayout[name] === value)
    return;

  hullLayout[name] = value;

  var updateObject = {};
  updateObject[name] = value;

  Meteor.call(
      'HullLayoutUpdate',
      hullLayout._id,
      updateObject,
      function(err, result){
          console.log('Hull layout ' + name + ' updated to ' + value);
      }
  );
};

model.HullEditorService.prototype.togglePublish = function(hullLayout){
  if (hullLayout.published){
    this._unpublish(hullLayout);
  }else{
    this._publish(hullLayout);
  }
}

model.HullEditorService.prototype._publish = function(hullLayout){
    Meteor.call(
        'HullLayoutPublish',
        hullLayout._id,
        function(err, result){}
    );
};

model.HullEditorService.prototype._unpublish = function(hullLayout){
    Meteor.call(
        'HullLayoutUnpublish',
        hullLayout._id,
        function(err, result){}
    );
};