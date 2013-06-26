model.ModuleImage = function ModuleImage(args)
{
    this.name = args.name;
    this.inside = args.inside || false;
    this.outside = args.outside || false;
    this.hull = args.hull || false;
    this.over = args.over || false;
    this.under = args.under || false;
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

model.ModuleImage.prototype.getImageOver = function(){
    if ( ! this.over)
        return null;

    return '/module/' +this.name+ '-over.png';
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

    if (type == 'over')
        return this.getImageOver();

    if (type == 'default')
        return this.getDefault();

    return null;
};