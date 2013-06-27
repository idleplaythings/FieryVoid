var ModuleForMassMock = function ModuleForMassMock(position, width, height, weight)
{
    this.position = position;
    this.width = width;
    this.height = height;
    this.weight = weight;
}

ModuleForMassMock.prototype.getWeightWithPosition = function()
{
    var moduleCoMPosition = {
        x:this.position.x + this.width*0.5,
        y:this.position.y + this.height*0.5
    };

    return {
        position: moduleCoMPosition,
        weight: this.weight
    };
}


