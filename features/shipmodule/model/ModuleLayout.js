model.ModuleLayout = function ModuleLayout(args)
{
    if (! args)
        args = {};

    this.image = args.image || null;

    this._id = args._id || null;
    this.name = args.name || 'unnamed';
    this.description = args.description || '';
    this.width = args.width || 10;
    this.height = args.height || 10;
    this.scale = args.scale || 1;
    this.disabledTiles = args.disabledTiles || [];
    this.outsideTiles = args.outsideTiles || [];
    this.tileHeight = args.tileHeight || 1;
    this.allowedDirections = this.parseAvailableDirections(args.allowedDirections);
    this.direction = 1;
    this.setDirection(args.direction);
    
    this.icon = {under: null, over: null};

    this.mass = args.mass || 1;

    this.deprecated = args.deprecated || false;
    this.published = args.published || false;

    this.position = args.position || {x:0, y:0};

    this.animators = [];

    this.ship = null;
    this.gameScene = null;
    this.dispatcher = null;

    this.traits = args.traits || [];
    this.initTraits();
};

model.ModuleLayout.prototype.registerAnimator = function(animator)
{
    this.animators.push(animator);
}

model.ModuleLayout.prototype.initAnimators = function()
{
    this.animators.forEach(function(animator){
        animator.init();
    }, this);
}

model.ModuleLayout.prototype.animate = function(gametime)
{
    this.animators.forEach(function(animator){
        animator.animate(gametime);
    });
}

model.ModuleLayout.prototype.getWidth = function()
{
    var r = (this.direction == 2 || this.direction == 3) ? this.height : this.width;
    return parseInt(r, 10);
}

model.ModuleLayout.prototype.getHeight = function()
{
    var r =  (this.direction == 2 || this.direction == 3) ? this.width : this.height;
    return parseInt(r, 10);
}

model.ModuleLayout.prototype.initTraits = function() {
    this.traits.forEach(function(trait) {
        var traitName = 'ModuleTrait' + trait.name[0].toUpperCase() + trait.name.slice(1);

        if (! model[traitName])
            return;

        var trait = new model[traitName](trait.value);
        trait.extend(this);
    }, this);
}

model.ModuleLayout.prototype.setDirection = function(direction)
{
    if (! direction)
    {
        this.direction = this.allowedDirections[0];
        return;
    }

    direction = parseInt(direction, 10);

    if (typeof direction !== 'number' || direction % 1 != 0)
    {
        this.direction = this.allowedDirections[0];
        return;
    }

    if (! this.allowedDirections.some(function(v){return v === direction}))
    {
        //TODO: set module to invalid state so that player can fix it.
    }
    this.direction = direction;
};

model.ModuleLayout.prototype.parseAvailableDirections = function(allowed)
{
    if ( ! allowed)
        return [1];

    if ( ! Array.isArray(allowed))
        allowed = allowed.split(',');

    allowed = allowed.map(function(value){return parseInt(value)});

    allowed = allowed.filter(function(value, i){
            return allowed.indexOf(value) == i && typeof value === 'number' && value % 1 == 0 && value > 0 && value <= 4;
        })
        .sort();
        

    if (allowed.length === 0)
        return [1];

    return allowed;
};

model.ModuleLayout.prototype.getRotation = function()
{
    switch (this.direction)
    {
        case 2:
            return 270;
        case 3:
            return 90;
        case 4:
            return 180;
        default:
            return 0;
    }
};

model.ModuleLayout.prototype.occupiesPosition = function(pos)
{
    var pos = {
        x: pos.x - this.position.x,
        y: pos.y - this.position.y
    };

    if (pos.x < 0 || pos.y < 0)
        return false;

    if (pos.x >= this.getWidth() || pos.y >= this.getHeight())
        return false;

    if (this.isDisabledTile(pos))
        return false;

    return true;
};

model.ModuleLayout.prototype.setPosition = function(pos)
{
    this.position = pos;
};


model.ModuleLayout.prototype.getPosition = function()
{
    return this.position;
};

model.ModuleLayout.prototype.getTopLeftPosition = function()
{
    return {
        x: this.position.x,
        y: this.position.y + this.getHeight()
    };
};

model.ModuleLayout.prototype.getCenterPosition = function()
{
    return {
        x: this.position.x + (this.getWidth()/2),
        y: this.position.y + (this.getHeight()/2)
    };
};

model.ModuleLayout.prototype.getPositionHeight = function(hullLayout)
{
    var height = 1;

    for (var x = 0; x < this.getWidth(); x++)
    {
        for (var y = 0; y < this.getHeight(); y++)
        {
            var posHeight = hullLayout.getTileHeight({x:this.position.x + x, y:this.position.y + y});
            if (posHeight > height)
                height = posHeight;
        }
    }

    return height;
};

model.ModuleLayout.prototype.isOutOfBounds = function(pos)
{
    return pos.x < 0 || pos.y < 0 || pos.x >= this.getWidth() || pos.y >= this.getHeight();
};

model.ModuleLayout.prototype.getTileListIndex = function(pos)
{
    if (this.isOutOfBounds(pos))
            throw new Error("(x: " + pos.x + ",y: "
                + pos.y+" is outside of the module" );

    if (this.direction == 2)
    {
        var x = pos.y;
        var y = (this.height-1) - pos.x;

        return y * this.width + x;
    }
    else if (this.direction == 3)
    {
        var x = (this.width-1) - pos.y;
        var y = pos.x;

        return y * this.width + x;
    }
    else if (this.direction == 4)
    {
        var x = (this.width-1) - pos.x
        var y = (this.height-1) - pos.y;

        return y * this.width + x;
    }
    else
    {
        return pos.y * this.width + pos.x;
    }
};

model.ModuleLayout.prototype.isDisabledTile = function(pos)
{
    return this.disabledTiles.indexOf(this.getTileListIndex(pos)) >= 0;
};

model.ModuleLayout.prototype.isOutsideTile = function(pos)
{
    return this.outsideTiles.indexOf(this.getTileListIndex(pos)) >= 0;
};

model.ModuleLayout.prototype.getTileHeight = function(pos)
{
    return this.tileHeight;
};

model.ModuleLayout.prototype.getMass = function()
{
    return parseInt(this.mass);
};

model.ModuleLayout.prototype.getTileIndex = function(tile){
    return tile.y * this.width + tile.x;
};
