model.ModuleImage = function ModuleImage(args)
{
	if ( ! args)
		args = {};
		
    this.inside = args.inside || false;
    this.outside = args.outside || false;
    this.hull = args.hull || false;
    this.over = args.over || false;
    this.under = args.under || false;
    this.hullbump = args.hullbump || false;
    this.outsidebump = args.outsidebump || false;
    this.overbump = args.overbump || false;
};

model.ModuleImage.prototype.serialize = function(){
    return this;
};

model.ModuleImage.prototype.getImageInside = function(){
    if ( ! this.inside)
        return this.getDefault();

    return '/module/' +this.inside;
};

model.ModuleImage.prototype.getImageOutside = function(){
	if ( ! this.outside )
		return '/misc/x.png';
		
    return '/module/' +this.outside;
};

model.ModuleImage.prototype.getImageHull = function(){
    if ( ! this.hull)
        return null;

    return '/module/' +this.hull;
};

model.ModuleImage.prototype.getImageHullBump = function(){
    if ( ! this.hullbump)
        return null;

    return '/module/' + this.hullbump;
};

model.ModuleImage.prototype.getImageOutsideBump = function(){
    if ( ! this.outsidebump)
        return null;

    return '/module/' + this.outsidebump;
};

model.ModuleImage.prototype.getImageOver = function(){
    if ( ! this.over)
        return null;

    return '/module/' + this.over;
};

model.ModuleImage.prototype.getImageOverBump = function(){
    if ( ! this.overbump)
        return null;

    return '/module/' + this.overbump;
};

model.ModuleImage.prototype.getDefault = function(){
    if (this.inside)
        return this.getImageInside();

    return this.getImageOutside();
};

//'inside','outside','hull','hullbump','outsidebump','overbump','over'

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
