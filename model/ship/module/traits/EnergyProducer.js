model.ModuleLayoutEnergyProducerTrait = function ModuleLayoutEnergyProducerTrait(){
    this.name = 'energyProduced';
    this.label = 'Energy Produced';
    this.value = null;
};

// model.ModuleLayoutStorageTrait.prototype.toggleDisabledTile = function(pos)
// {
//     var i = pos.y * this.width + pos.x;

//     Meteor.call(
//         'ModuleLayoutToggleDisabled',
//         this._id,
//         i,
//         function(err, result){}
//     );
// };

// model.ModuleLayoutStorageTrait.prototype.toggleOutsideTile = function(pos)
// {
//     var i = pos.y * this.width + pos.x;

//     Meteor.call(
//         'ModuleLayoutToggleOutside',
//         this._id,
//         i,
//         function(err, result){}
//     );
// };

// model.ModuleLayoutStorageTrait.prototype.updateIfDifferent = function(name, value)
// {
//     if ( ! this[name])
//         throw "Trying to change ModuleLayout value '" + name
//             +"' that does not exist";

//     if (this[name] != value)
//     {
//         this[name] = value;
//         this.updateValue(name, value);
//     }
// };

// model.ModuleLayoutStorageTrait.prototype.updateValue = function(name, value)
// {
//     var updateObject = {};
//     updateObject[name] = value;

//     Meteor.call(
//         'ModuleLayoutUpdate',
//         this._id,
//         updateObject,
//         function(err, result){
//             console.log('ModuleLayout ' +name + ' updated to ' + value);
//         }
//     );
// };