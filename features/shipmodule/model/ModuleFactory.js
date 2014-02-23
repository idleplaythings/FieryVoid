model.ModuleFactory = function ModuleFactory()
{
	
};

model.ModuleFactory.prototype.constructFromLayout = function(serialized)
{
	var moduleLayout = new model.ModuleLayout(serialized);

    var image = new model.ModuleImage(moduleLayout.image);
    if (! image)
        return null;

    moduleLayout.image = image;

    return moduleLayout;
};