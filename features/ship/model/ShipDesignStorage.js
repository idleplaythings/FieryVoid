model.ShipDesignStorage = function ShipDesignStorage(timelineFactory)
{
    this.timelineFactory =  timelineFactory
};

model.ShipDesignStorage.prototype.getReactiveShipDesign = function(id, callback)
{
	var self = this;
	Deps.autorun(function(){
		var doc = ShipDesigns.findOne({_id: id});
		
		if (! doc)
			return;

		var shipDesign = self.createShipDesign(doc);
		callback(shipDesign);
    });
};

model.ShipDesignStorage.prototype.getShipDesign = function(id)
{
    var doc = ShipDesigns.findOne({_id: id});
    if (! doc)
        return null;

    return this.createShipDesign(doc);
};

model.ShipDesignStorage.prototype.createShipDesign = function(doc)
{
    doc.hullLayout = HullLayouts.findOne({'_id': doc.hullLayoutId})

    if ( ! doc.hullLayout)
    {
        console.log("did not find a hull layout for ship design. " +
            "This is propably because you don't wait for hull layout collection to be ready.");
        return null;
    }


    doc.modules = doc.modules.map(
        function(moduleDetails)
        {
            var module = ModuleLayouts.findOne(
                {'_id': moduleDetails.module});

            module.setPosition(moduleDetails.position);
            module.setDirection(moduleDetails.direction);

            return new model.ModuleLayoutOnShip(
                module,
                this.timelineFactory.getTimeline(moduleDetails.timelineId)
            );
        }, this);

    return new model.ShipDesignInGame(doc);
};
