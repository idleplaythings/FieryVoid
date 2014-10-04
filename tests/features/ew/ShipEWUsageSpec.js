describe("Ship EW usage", function() {

  var ship, turn, targetShip;
  
  beforeEach(function() {
    turn = 1;
    ship = {getScanners: function(){}};
    targetShip = {_id: 'nön'};

  });
    
  it("should return DEW", function() {
    spyOn(ship, 'getScanners').andCallFake(getScanners(10));
    var shipEwUsage = new model.ew.ShipEWUsage(ship, turn, []);
    expect(shipEwUsage.getDew()).toEqual(10);
  });

  it("should increase OEW against target", function(){

    spyOn(ship, 'getScanners').andCallFake(getScanners(10));
    var shipEwUsage = new model.ew.ShipEWUsage(ship, turn, []).increaseOew(targetShip);

    expect(shipEwUsage.getOewAgainst(targetShip)).toEqual(1);
    expect(shipEwUsage.getDew()).toEqual(9);
  });
  
  it("should decrease OEW against target", function(){

    spyOn(ship, 'getScanners').andCallFake(getScanners(10));
    var shipEwUsage = new model.ew.ShipEWUsage(ship, turn, [])
      .increaseOew(targetShip)
      .increaseOew(targetShip)
      .increaseOew(targetShip)
      .decreaseOew(targetShip);

    expect(shipEwUsage.getOewAgainst(targetShip)).toEqual(2);
    expect(shipEwUsage.getDew()).toEqual(8);
  });

  it("should throw if invalid", function(){

    spyOn(ship, 'getScanners').andCallFake(getScanners(0));
    expect(function(){
      new model.ew.ShipEWUsage(ship, turn, [])
        .increaseOew(targetShip);
    }).toThrow('Producing insufficient EW');

    expect(function(){
      new model.ew.ShipEWUsage(null, turn, []);
    }).toThrow('Ship does not implement required interface');

    expect(function(){
      new model.ew.ShipEWUsage(ship, null, []);
    }).toThrow('Turn is not a positive integer');
    
  });

  var getScanners = function(amount){
    return function(){
      return [{
        getScanner: function(){
          return {
            getProducedEw: function(){
              return amount;
            }
          }
        }
      }]
    }
  };

});
