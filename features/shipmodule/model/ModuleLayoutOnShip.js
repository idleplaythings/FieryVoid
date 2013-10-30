model.ModuleLayoutOnShip = function ModuleLayoutOnShip(args, timeline)
{
    model.ModuleLayout.call(this, args);
    this.timeline = timeline;
};

model.ModuleLayoutOnShip.prototype = Object.create(model.ModuleLayout.prototype);

model.ModuleLayoutOnShip.prototype.serialize = function()
{
    return {
        module: this._id,
        position: this.position,
        direction: this.direction,
        timelineId: this.timeline.getId()
    };
};