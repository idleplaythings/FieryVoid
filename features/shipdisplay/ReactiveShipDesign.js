model.ReactiveShipDesign = function ReactiveShipDesign(
    shipDesignId, dispatcher, eventName, shipDesignStorage)
{
    this.shipDesignId = shipDesignId;
    this.shipDesignStorage = shipDesignStorage;
    model.ReactiveComponent.call(this, dispatcher, null, null, eventName);
};

model.ReactiveShipDesign.prototype = 
    Object.create(model.ReactiveComponent.prototype);

model.ReactiveShipDesign.prototype.react = function()
{
    if (this.reactivityHandle)
        this.reactivityHandle.stop();

    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        self.modelObject = self.shipDesignStorage.getShipDesign(self.shipDesignId);
        self.dispatch();
    });
       
    return this;
};
