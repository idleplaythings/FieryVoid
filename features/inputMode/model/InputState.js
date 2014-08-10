model.InputState = function InputState(){
  this._state = {};
};

model.InputState.prototype.set = function(name, value){
  if (this._state[name]){
    this._state[name].value = value;
  }else{
    this._state[name] = {value: value, callbacks: []};
  }

  this._state[name].callbacks.forEach(function(callback){
    callback(value);
  });
};

model.InputState.prototype.get = function(name){
  if (this._state[name])
    return this._state[name].value;

  return null;
};

model.InputState.prototype.listen = function(name, callback){
  if (this._state[name])
    this._state[name].callbacks.push(callback);
  else
    this._state[name] = {value: null, callbacks: [callback]};
};