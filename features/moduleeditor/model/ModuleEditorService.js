model.ModuleEditorService = function ModuleEditorService(){}

model.ModuleEditorService.prototype.toggleDisableTile = function(moduleLayout, tile){
   if (moduleLayout.isOutOfBounds(tile))
        return;

    Meteor.call(
        'ModuleLayoutToggleDisabled',
        moduleLayout._id,
        moduleLayout.getTileIndex(tile),
        function(err, result){}
    );
};

model.ModuleEditorService.prototype.toggleOutsideTile = function(moduleLayout, tile){
  if (moduleLayout.isOutOfBounds(tile))
        return;

    Meteor.call(
        'ModuleLayoutToggleOutside',
        moduleLayout._id,
        moduleLayout.getTileIndex(tile),
        function(err, result){}
    );
};

model.ModuleEditorService.prototype.togglePublish = function(moduleLayout){
  Meteor.call(
    'ModuleLayoutPublish',
    moduleLayout._id,
    function(err, result){}
  );
};

model.ModuleEditorService.prototype.getAvailableTraits = function() {
    var traits = [];

    for (modelName in model) {
        if (modelName.match(/^ModuleTrait\D+$/) !== null) {
            traits.push(modelName);
        }
    }
    return traits;
};

model.ModuleEditorService.prototype.update = function(moduleLayout, name, value){
  if ( ! moduleLayout[name] === undefined)
    return;

  if (moduleLayout[name] === value)
    return;

  moduleLayout[name] = value;

  this._updateValue(moduleLayout, name, value, false);
};

model.ModuleEditorService.prototype.updateImage = function(moduleLayout, name, value){
  if (moduleLayout.image[name] === undefined)
    return;

  if (moduleLayout.image[name] === value)
    return;

  moduleLayout.image[name] = value;

  this._updateValue(moduleLayout, 'image', moduleLayout.image.serialize(), false);
};

model.ModuleEditorService.prototype.updateTrait = function(moduleLayout, name, value){

  moduleLayout.traits.forEach(function(trait){
      if (trait.name == name && trait.value != value)
      {
          trait.value = value;
          
      }
  }, this);

  this._updateValue(moduleLayout, name, value, true);
};

model.ModuleEditorService.prototype._updateValue = function(moduleLayout, name, value, trait)
{
  console.log("update", arguments);
    if (! trait)
        trait = false;

    var updateObject = {};
    updateObject[name] = value;

    Meteor.call(
        'ModuleLayoutUpdate',
        moduleLayout._id,
        updateObject,
        trait,
        function(err, result){
            console.log('ModuleLayout ' +name + ' updated to ', value);
        }
    );
};
