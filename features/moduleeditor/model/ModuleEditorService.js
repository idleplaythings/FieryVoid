model.ModuleEditorService = function ModuleEditorService(){}

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
  if ( ! moduleLayout[name])
    return;

  if (moduleLayout[name] === value)
    return;

  moduleLayout[name] = value;

  this._updateValue(moduleLayout, name, value, false);
};

model.ModuleEditorService.prototype.updateImage = function(moduleLayout, name, value){
  console.log(arguments);
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
