if ( typeof model === 'undefined')
    model = {};

model.TraitVariable = function TraitVariable(
	name, description, options, defaultValue, deserialization, validation)
{
	this.name = name;
	this.description = description;
	this.defaultValue = defaultValue || '';
	this.options = options || false;
	this.condition = null;
	
	this.value = null;
	
	this.deserialization = deserialization || this.DESERIALIZATION_VALUE;
	this.validation = validation || this.VALIDATION_NOT_EMPTY;
};

model.TraitVariable.prototype.get = function()
{
	return this.value !== null && this.value !== '' ? this.value : this.defaultValue;
};

model.TraitVariable.prototype.setCondition = function(condition)
{
	this.condition = condition;
	return this;
};

model.TraitVariable.prototype.shouldDisplay = function()
{
	if (this.condition)
		return this.condition();
		
	return true;
};

model.TraitVariable.prototype.consume = function(name, value)
{
	if (name !== this.name)
		return false;
	
	value = this.deserialization(value);
		
	this.value = value;
};

model.TraitVariable.prototype.isValid = function(value)
{
	value = this.deserialization(value);
	
	if ( ! value)
		value = this.value;
	
	return this.validation(value);
};

model.TraitVariable.prototype.DESERIALIZATION_JSON = function(value)
{
	try
    {
        return JSON.parse(value);
    }
    catch(err)
    {
        return null;
    }
};

model.TraitVariable.prototype.DESERIALIZATION_VALUE = function(value)
{
	var num = parseInt(value, 10);

    if (isNaN(num))
		return value;
	
        
	return num;
};

model.TraitVariable.prototype.VALIDATION_NOT_EMPTY = function(value)
{
	if (value)
		return value !== null && typeof value !== 'undefined';
		
	return this.defaultValue || (this.value !== null && typeof this.value !== 'undefined');
	
	
};
