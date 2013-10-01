model.ModuleImage = function ModuleImage(args)
{
    this.name = args.name;
    this.inside = args.inside || false;
    this.outside = args.outside || false;
    this.hull = args.hull || false;
    this.over = args.over || false;
    this.under = args.under || false;
    this.hullbump = args.hullbump || false;
    this.outsidebump = args.outsidebump || false;
    this.overbump = args.overbump || false;
};

model.ModuleImage.prototype.getImageInside = function(){
    if ( ! this.inside)
        return this.getDefault();

    return '/module/' +this.name+ '-inside.png';
};

model.ModuleImage.prototype.getImageOutside = function(){
    return '/module/' +this.name+ '-outside.png';
};

model.ModuleImage.prototype.getImageHull = function(){
    if ( ! this.hull)
        return null;

    return '/module/' +this.name+ '-hull.png';
};

model.ModuleImage.prototype.getImageHullBump = function(){
    if ( ! this.hullbump)
        return null;

    return '/module/' +this.name+ '-hullbump.png';
};

model.ModuleImage.prototype.getImageOutsideBump = function(){
    if ( ! this.outsidebump)
        return null;

    return '/module/' +this.name+ '-outsidebump.png';
};

model.ModuleImage.prototype.getImageOver = function(){
    if ( ! this.over)
        return null;

    return '/module/' +this.name+ '-over.png';
};

model.ModuleImage.prototype.getImageOverBump = function(){
    if ( ! this.overbump)
        return null;

    return '/module/' +this.name+ '-overbump.png';
};

model.ModuleImage.prototype.getDefault = function(){
    if (this.inside)
        return this.getImageInside();

    return this.getImageOutside();
};

model.ModuleImage.prototype.getByType = function(type){
    if (type == 'inside')
        return this.getImageInside();

    if (type == 'outside')
        return this.getImageOutside();

    if (type == 'hull')
        return this.getImageHull();

    if (type == 'hullbump')
        return this.getImageHullBump();

    if (type == 'outsidebump')
        return this.getImageOutsideBump();

    if (type == 'overbump')
        return this.getImageOverBump();

    if (type == 'over')
        return this.getImageOver();

    if (type == 'default')
        return this.getDefault();

    return null;
};
