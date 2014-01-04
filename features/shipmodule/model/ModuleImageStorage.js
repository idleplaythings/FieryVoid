ModuleImages = new Meteor.Collection(
    "ModuleImages"
);

ModuleImages.allow({
    insert: function () {
        return false;
    },

    update: function () {
        return true;
    },

    remove: function () {
        return false;
    }
});

model.ModuleImageStorage = function ModuleImageStorage() {}

model.ModuleImageStorage.prototype.insert = function(names, globaltype)
{
	names.forEach(function(name){
		
		var type = null;
		var pattern = new RegExp(/^[a-z0-9]+-(inside|outside|hull|hullbump|outsidebump|overbump|over)\.png/);
		
		if ( ! globaltype)
		{
			type = pattern.exec(name);
			if (! type)
				return;
				
			type = type[1];
		}
		else
		{
			type = globaltype;
		}
		
		ModuleImages.update(
			{ name: name },
			{ $setOnInsert: { name: name, type: type }},
			{ upsert: true });
	});
};

model.ModuleImageStorage.prototype.getAll = function()
{
	return ModuleImages.find({}).fetch();
	
	var images = ModuleImages.find({});
	
	var sorted = {};
	
	images.forEach(function(image){
		
		var type = image.type;
		var value = image.name;
		
		if ( ! sorted[type])
			sorted[type] = [];
			
		sorted[type].push(value);
	});
	
	return sorted;
};

