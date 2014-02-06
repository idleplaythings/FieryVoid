model.ModuleImage = function ModuleImage(args)
{
	if ( ! args)
		args = {};

    this.inside = args.inside || false;
    this.outside = args.outside || false;
    this.hull = args.hull || false;
    this.over = args.over || false;
    this.under = args.under || false;
    this.ui = args.ui || false;
};

model.ModuleImage.prototype.serialize = function(){
    return this;
};

model.ModuleImage.prototype.getImageUi = function(){
    if ( ! this.ui)
        return '/misc/x.png';

    return '/module/ui/' +this.ui;
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

model.ModuleImage.prototype.getImageHullNormal = function(){
    if ( ! this.hull)
        return null;

    return '/module/bump/' + this.hull;
};

model.ModuleImage.prototype.getImageOutsideNormal = function(){

    return '/module/bump/' + this.outside;
};

model.ModuleImage.prototype.getImageInsideNormal = function(){
    if ( ! this.inside)
        return this.getDefaultNormal();

    return '/module/bump/' + this.outside;
};


model.ModuleImage.prototype.getImageOver = function(){
    if ( ! this.over)
        return null;

    return '/module/' + this.over;
};

model.ModuleImage.prototype.getImageUnder = function(){
    if ( ! this.under)
        return null;

    return '/module/' + this.under;
};

model.ModuleImage.prototype.getDefault = function(){
    if (this.inside)
        return this.getImageInside();

    return this.getImageOutside();
};

model.ModuleImage.prototype.getDefaultNormal = function(){
    if (this.inside)
        return this.getImageInsideNormal();

    return this.getImageOutsideNormal();
};

//'inside','outside','hull','hullbump','outsidebump','overbump','over'


model.ModuleImage.prototype.getNormalByType = function(type)
{

    if (type == 'outside')
        return this.getImageOutsideNormal();

    if (type == 'hull')
        return this.getImageHullNormal();

	if (type == 'inside')
        return this.getImageInsideNormal();

    return null;
};

model.ModuleImage.prototype.getByType = function(type)
{
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

	if (type == 'under')
        return this.getImageUnder();

	if (type == 'ui')
        return this.getImageUi();

    if (type == 'default')
        return this.getDefault();

    return null;
};
