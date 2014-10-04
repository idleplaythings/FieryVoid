model.Armor = function Armor(name, size, className){
  this.name = name;
  this._size = size || 1;
  this.className = className;
}

model.Armor.prototype.getThickness = function(){
  return this._size;
};