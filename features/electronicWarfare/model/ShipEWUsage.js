(function(){
  model.ew.ShipEWUsage = function(ship, turn, usage){
    this._ship = ship;
    this._turn = turn;
    this._usage = usage || [];

    validate.call(this);
  }

  model.ew.ShipEWUsage.prototype.clone = function(newUsage) {
    if (! newUsage)
      newUsage = [];

    return new model.ew.ShipEWUsage(
      this._ship,
      this._turn,
      this._usage.concat(newUsage)
    );
  };

  model.ew.ShipEWUsage.prototype.serialize = function(newUsage) {
    return {
      turn: this._turn,
      ship: this._ship,
      usage: this._usage.map(function(order){
        return order.serialize();
      })
    }
  };

  model.ew.ShipEWUsage.prototype.getDew = function() {
    return this.getTotalProducedEw() - this.getTotalUsedEW();
  };

  model.ew.ShipEWUsage.prototype.increaseOew = function(target) {
    var entry = getOewAgainst.call(this, target);
    entry = entry.increaseAmount();
    return this.clone(entry);
  };

  model.ew.ShipEWUsage.prototype.decreaseOew = function(target) {
    var entry = getOewAgainst.call(this, target);
    entry = entry.decreaseAmount();
    return this.clone(entry);
  };

  model.ew.ShipEWUsage.prototype.getOewAgainst = function(ship) {
    return getOewAgainst.call(this, ship).amount;
  };

  model.ew.ShipEWUsage.prototype.getTotalProducedEw = function(){
    return this._ship.getScanners().reduce(function(value, module){
      return value + module.getScanner().getProducedEw(this._turn);
    }.bind(this), 0)
  };

  model.ew.ShipEWUsage.prototype.getTotalUsedEW = function(){
    return this._usage.reduce(function(value, order){
      return order.amount;
    }, 0);
  };

  var getOewAgainst = function(ship){
    var entry = getOew.call(this).filter(function(order){
      return order.targetId === ship._id;
    }).pop();

    if (! entry){
      entry = getEwEntry.call(this, ship, 0, model.ew.types.OEW);
    }

    return entry;
  };

  var getEwEntry = function(target, amount, type){
    return new model.ew.EWOrder({
      targetId: target._id,
      targetShip: target,
      type: type,
      amount: amount,
      turn: this._turn
    });
  }

  var getOew = function(){
    return this._usage.filter(function(order){
      return order.type == model.ew.types.OEW;
    });
  };

  var validate = function(){

    if ( ! this._ship || ! this._ship.getScanners) {
      throw new Error('Ship does not implement required interface');
    }

    if ( ! isInt(this._turn) || this._turn < 0){
      throw new Error('Turn is not a positive integer');
    }

    if (this.getTotalProducedEw() < this.getTotalUsedEW()){
      throw new Error('Producing insufficient EW');
    }

  };

  function isInt(n){
    return typeof n== "number" && isFinite(n) && n%1===0;
  };

})();