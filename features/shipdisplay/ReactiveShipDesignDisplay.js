model.ReactiveShipDesignDisplay = function ReactiveShipDesignDisplay(
    shipDesignId, target, gameScene, dispatcher)
{
    this.shipDesignId = shipDesignId;
    this.reactivityHandle = null;
    this.shipDisplay = new model.ShipDisplay2(
        new model.ShipIconEditor(), gameScene, dispatcher).renderOn(target);
};

model.ReactiveShipDesignDisplay.prototype.react = function()
{
    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        var shipDesign = new model.ShipDesign().load(self.shipDesignId);
        self.shipDisplay.update(shipDesign);
    });

    return this;
};

model.ReactiveShipDesignDisplay.prototype.destroy = function()
{
    this.reactivityHandle.stop();
    this.shipDisplay.destroy();
};

