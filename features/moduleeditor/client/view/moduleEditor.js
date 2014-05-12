
Template.moduleEditor.created = function()
{
    this.data.moduleEditor = dic.get("model.ModuleEditor");
}

Template.moduleEditor.rendered = function()
{
    this.data.moduleEditor.init(
        jQuery('div.displayLarge'),
        jQuery('div.modulelist'),
        jQuery('div.moduleImageChooser')
    );
};

Template.moduleEditor.destroyed = function()
{
    this.data.moduleEditor.destroy();
};

Template.moduleMenu.activetraits = function()
{
    var trait,
        traits = [];

    dic.get('model.ModuleEditorService').getAvailableTraits(this.moduleLayout).forEach(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayoutTrait(this.moduleLayout, trait.name);

        if (value) 
            traits.push(trait);
    }, this);

    return traits;
}

Template.moduleMenu.inactivetraits = function()
{
    var trait,
        traits = [];

    dic.get('model.ModuleEditorService').getAvailableTraits().forEach(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayoutTrait(this.moduleLayout, trait.name);

        if ( ! value) 
            traits.push(trait);
    }, this);

    return traits;
}

Template.moduleMenu.traits = function()
{
    var trait,
        traits = [];

    dic.get('model.ModuleEditorService').getAvailableTraits().every(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayoutTrait(this.moduleLayout, trait.name);

        if (value) {
            trait.value = value;
        } else {
            trait.value = '';
        }

        traits.push(trait);

        return true;
    }, this);

    return traits;
}


Template.traitDetail.events({
    'click .smallClose': function(event, template) {
		evaluateTraitStatus(template.data.moduleLayout);
        Session.set('activetrait', null);
    },
    'change select, change input': function(event, template) {
		evaluateTraitStatus(template.data.moduleLayout);
    }
});

function evaluateTraitStatus(module){

    if ( ! module)
        return;

	var traitName = Session.get('activetrait');
	
	if ( ! traitName)
		return;
	
	var variables = {};
	
    jQuery('.traitDetails input, .traitDetails select').get().forEach(function(input){

		var name = input.name;
		var value = jQuery(input).val().trim();
		
		if (value == '')
			return;
			
		variables[name] = value;
	});
	
	if (Object.keys(variables).length === 0)
		variables = null;
	
	
	var trait = model.ModuleTrait.prototype.instantiateFromName(
		traitName, variables);
		
	var valid = trait.getTraitVariables().every(function(variable){
		return variable.isValid();
	});
	
	var previousValue = getFromSelectedLayoutTrait(module, traitName);
	
	if (previousValue == '')
		previousValue = null;
		
	if ( previousValue == variables)
		return;
		
	if (variables == null)
        dic.get('model.ModuleEditorService').updateTrait(module, trait.name, null);
	else if (valid)
	{
        dic.get('model.ModuleEditorService').updateTrait(module, trait.name, variables);
	}
	else
	{
		console.log("Do nothing, invalid trait value");
		//nothing?	
	}
};

Template.traitDetail.traitDetailDisplay = function()
{
	return Session.get('activetrait') ? 'block' : 'none';
};

Template.traitDetail.traitVariables = function()
{
    var traitName = Session.get('activetrait');
       
	if ( ! traitName)
		return [];
		
	var trait = model.ModuleTrait.prototype.instantiateFromName(
		traitName, getFromSelectedLayoutTrait(this.moduleLayout, traitName));

    return trait.getTraitVariables();
};

Template.traitDetail.hasOptions = function()
{
	return this.options;
};

Template.traitDetail.get = function()
{
    return this.get();
};

Template.traitDetail.options = function()
{
	var current = this.get();
	return this.options.map(function(option){
		
		var selected = option == current ? 'selected="selected"' : '';
		return {option: option, selected: selected};
	});
};

Template.moduleMenu.events({
    'blur input, blur textarea': function (event, template) {
        handleDetailChange(event.currentTarget, template.data.moduleLayout);
    },
    'click .publish': function(event) {

        var moduleLayout = this.moduleLayout;

        if ( ! moduleLayout)
            return;

        dic.get('model.ModuleEditorService').togglePublish(moduleLayout);
    },
    'click .outside': function(event) {
        Session.set('moduleEditor_brushType', 'outside');
    },
    'click .disabled': function(event) {
        Session.set('moduleEditor_brushType', null);
    }, 
    'click .activetrait': function(event) {
		jQuery('.traitDetails').show();
        Session.set('activetrait', this.name);
    },
    'change .newtrait': function(event) {
        Session.set('activetrait', jQuery(event.currentTarget).val());
    }
});

Template.moduleMenu.outsideClass = function()
{
    return Session.get('moduleEditor_brushType') == 'outside' ? 'active' : '';
};

Template.moduleMenu.disabledClass = function()
{
    return Session.get('moduleEditor_brushType') ? '' : 'active';
};

function getFromSelectedLayoutTrait(layout, name){
    if (layout)
    {
        for (var i in layout.traits)
        {
            if ( layout.traits[i].name == name)
                return layout.traits[i].value;
        }
    }

    return '';
};

function handleDetailChange(element, layout)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();
    value = value.trim();

    if (jQuery(element).hasClass('trait'))
    {
        dic.get('model.ModuleEditorService').updateTrait(layout, name, value);
    }
    else
    {
        dic.get('model.ModuleEditorService').update(layout, name, value);
    }
};
