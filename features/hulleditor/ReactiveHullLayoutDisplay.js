model.ReactiveHullLayoutDisplay = function ReactiveHullLayoutDisplay(target, gameScene, dispatcher)
{
    this.reactivityHandle = null;
    this.hullDisplay = new model.ShipDisplay2(
        new model.ShipIconHull(), gameScene, dispatcher).renderOn(target);
};

model.ReactiveHullLayoutDisplay.prototype.react = function()
{
    if (this.reactivityHandle)
        this.reactivityHandle.stop();

    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        var hullLayout = HullLayouts.findOne(
                    {_id: Session.get("selected_hullLayout")});

        console.log("reacting, hull id: ");
        if (hullLayout)
            self.hullDisplay.update(new model.ShipDesign({hullLayout: hullLayout}));
    });

    return this;
};

model.ReactiveHullLayoutDisplay.prototype.destroy = function()
{
    this.reactivityHandle.stop();
    this.shipDisplay.destroy();
};

