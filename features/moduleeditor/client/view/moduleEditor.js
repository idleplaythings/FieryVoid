
Template.moduleEditor.created = function()
{
    Meteor.subscribe("ModuleImages");
    Meteor.subscribe("ModuleLayoutsAdmin");
}

Template.moduleEditor.destroyed = function()
{
    if (Template.moduleEditor.controller)
    {
        Template.moduleEditor.controller.destroy();
        Template.moduleEditor.controller = null;
    }
}

Template.moduleEditor.rendered = function()
{
	var sub = Meteor.subscribe('ModuleLayoutsAdmin', function(){
		createController();
	});
}

function createController()
{
	if ( ! Template.moduleEditor.controller)
	{
		var target = jQuery('div.displayLarge');
		var modulelist = jQuery('div.modulelist');
		var modulesImageContainer = jQuery('div.moduleImageChooser');

		Template.moduleEditor.controller =
			new model.ModuleEditor(
				target, modulelist, modulesImageContainer, dic.get('model.ModuleImageStorage'));
	}
};


Template.moduleListing = _.extend(Template.moduleListing, BaseTemplate);

Template.moduleListing.moduleImages = function () {
    var imgs = ModuleImages.find({});
    return imgs;
};




Template.moduleImage.isSelected = function(){
    return Session.get("selected_moduleImg") === this._id;
};

Template.moduleImage.selected = function (){
    var selected = (Session.get("selected_moduleImg") === this._id);
    return selected ? 'selected' : '';
};

Template.moduleImage.events({
    'click .module': function () {
        Session.set("selected_moduleImg", this._id);
    }
});

Template.moduleImage.moduleImgSrc = function(){
    return this.getDefault();
};

Template.moduleImage.moduleLayouts = function()
{
    return ModuleLayouts.find({image: this.name});
};

Template.moduleListing.events({
    'click .create': function () {
        Meteor.call('ModuleLayoutInsert', function(err, result){
           Session.set('selected_moduleLayout', result);
        });
    }
});






Template.moduleLayout.activeClass = function()
{
    return this.published ? 'active' : '';
};

Template.moduleLayout.layoutName = function()
{
    var star = this.published ? '★' : '☆';
    return star + " " + this.name;
};

Template.moduleLayout.selected = function()
{
    var selected = (Session.get("selected_moduleLayout") === this._id);
    return selected ? 'selected' : '';
};

Template.moduleMenu = _.extend(Template.moduleMenu, BaseTemplate);


Template.moduleMenu.moduleName = function()
{
    return getFromSelectedLayout('name');
};

Template.moduleMenu.tileGridWidth = function()
{
    return getFromSelectedLayout('width');
};

Template.moduleMenu.tileGridHeight = function()
{
    return getFromSelectedLayout('height');
};

Template.moduleMenu.mass = function()
{
    return getFromSelectedLayout('mass');
};

Template.moduleMenu.scale = function()
{
    return getFromSelectedLayout('scale');
};

Template.moduleMenu.tileHeight = function()
{
    return getFromSelectedLayout('tileHeight');
};

Template.moduleMenu.mass = function()
{
    return getFromSelectedLayout('mass');
};

Template.moduleMenu.allowedDirections = function()
{
    return getFromSelectedLayout('allowedDirections');
};

Template.moduleMenu.description = function()
{
    return getFromSelectedLayout('description');
};

Template.moduleMenu.activetraits = function()
{
    var trait,
        traits = [];

    model.ModuleLayout.getAvailableTraits().forEach(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayoutTrait(trait.name);

        if (value) 
            traits.push(trait);
    });

    return traits;
}

Template.moduleMenu.inactivetraits = function()
{
    var trait,
        traits = [];

    model.ModuleLayout.getAvailableTraits().forEach(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayoutTrait(trait.name);

        if ( ! value) 
            traits.push(trait);
    });

    return traits;
}

Template.moduleMenu.traits = function()
{
    var trait,
        traits = [];

    model.ModuleLayout.getAvailableTraits().every(function(traitName) {
        trait = new model[traitName]();
        value = getFromSelectedLayoutTrait(trait.name);

        if (value) {
            trait.value = value;
        } else {
            trait.value = '';
        }

        traits.push(trait);

        return true;
    });

    return traits;
}


Template.traitDetail.events({
    'click .smallClose': function(event) {
		evaluateTraitStatus();
        Session.set('activetrait', null);
    }
});

function evaluateTraitStatus()
{
	var traitName = Session.get('activetrait');
	
	if ( ! traitName)
		return;
	
	var variables = {};
	
    jQuery('.traitDetails input').get().forEach(function(input){
		console.log(input);
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
	
	var previousValue = getFromSelectedLayoutTrait(traitName);
	
	if (previousValue == '')
		previousValue = null;
		
	console.log(previousValue);
	console.log(variables);
	if ( previousValue == variables)
		return;
		
    var module = ModuleLayouts.findOne({_id: Session.get("selected_moduleLayout")});
    
	if ( ! module)
		return;
		
	if (variables == null)
		module.updateTrait(trait.name, null); //removes trait from module
	else if (valid)
	{
		console.log("update trait, value:", value);
		module.updateTrait(trait.name, variables);
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
		traitName, getFromSelectedLayoutTrait(traitName));

	console.log('trait', trait);
    return trait.getTraitVariables();
}

Template.moduleMenu.events({
    'blur input, blur textarea': function (event) {
        handleDetailChange(event.currentTarget);
    },
    'click .publish': function(event) {
        var layoutId = Session.get("selected_moduleLayout");
        if (layoutId)
        {
            var layout = ModuleLayouts.findOne({_id: layoutId});
            if (layout)
            {
                layout.publish();
            }
        }
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

Template.moduleMenu.publishedClass = function()
{
    return getFromSelectedLayout('published') ? 'active' : '';
};

Template.moduleMenu.outsideClass = function()
{
    return Session.get('moduleEditor_brushType') == 'outside' ? 'active' : '';
};

Template.moduleMenu.disabledClass = function()
{
    return Session.get('moduleEditor_brushType') ? '' : 'active';
};

function getFromSelectedLayout(name)
{
    var layoutId = Session.get("selected_moduleLayout");
    if (layoutId)
    {
        var layout = ModuleLayouts.findOne({_id: layoutId});

        if (layout && layout[name])
            return layout[name];
    }

    return '';
}

function getFromSelectedLayoutTrait(name)
{
    var layoutId = Session.get("selected_moduleLayout");
    if (layoutId)
    {
        var layout = ModuleLayouts.findOne({_id: layoutId});

        if (layout)
        {
            for (var i in layout.traits)
            {
                if ( layout.traits[i].name == name)
                    return layout.traits[i].value;
            }
        }
    }

    return '';
}

function handleDetailChange(element)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();
    value = value.trim();

    var layoutId = Session.get("selected_moduleLayout");
    if (layoutId)
    {
        var layout = ModuleLayouts.findOne({_id: layoutId});
        if (layout)
        {
            if (jQuery(element).hasClass('trait'))
            {
                layout.updateTrait(name, value);
            }
            else
            {
                layout.updateIfDifferent(name, value);
            }
        }
    }
}
