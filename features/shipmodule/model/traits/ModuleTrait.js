model.ModuleTrait = function ModuleTrait(traitVariables, value)
{
	this.traitVariables = [].concat(traitVariables);
	this.resolveVariables(value);
}

model.ModuleTrait.prototype.extend = function(obj)
{
    delete this.label;
    delete this.name;
    delete this.value;

    _.extend(obj, this);
}

model.ModuleTrait.prototype.instantiateFromName = function(traitName, value)
{
	if ( ! traitName)
		return null;
		
	if ( model[traitName])
		return new model[traitName](value);
		
	traitName = 'ModuleTrait' + traitName[0].toUpperCase() + traitName.slice(1);
	
	if ( model[traitName])
		return new model[traitName](value);
		
	return null;
};

model.ModuleTrait.prototype.serialize = function()
{
	var variables = {};
	
	this.traitVariables.forEach(function(variable){
		var value = variable.get();
		
		if (value === null)
			return;
			
		variables[variable.name] = value;
	});
	
	if (Object.keys(variables).length == 0)
		return null;
		
	return variables;
};

model.ModuleTrait.prototype.getVariable = function(name)
{
	var candidate = this.traitVariables.filter(function(variable){
		return variable.name === name;
	})[0];
	
	if ( ! candidate)
		throw Error("Trying to get non existing module trait variable: '"+name+"'");
	
	return candidate.get();
};

model.ModuleTrait.prototype.getTraitVariables = function()
{
	return this.traitVariables.filter(function(variable){
		return variable.shouldDisplay();
	});
};

model.ModuleTrait.prototype.resolveVariables = function(value)
{
	if (value === null || typeof value !== 'object')
		return;
		
	Object.keys(value).forEach(function(key){
		this.traitVariables.some(function(possible){
			possible.consume(key, value[key]);
		}, this);	
	}, this);
};

