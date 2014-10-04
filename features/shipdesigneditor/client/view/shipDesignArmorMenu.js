Template.shipDesignArmorMenu.events({
  'click button': function(event, template){
    var value = jQuery(event.target).val();
    console.log(value);

    var objectContainer = dic.get('model.SelectedArmorForPlacing');
    
    if (value){
      var armor = dic.get('model.armor.Factory').create(value);
      objectContainer.set(armor);
      console.log(armor);
    }else{
      objectContainer.set('');
    }
  }
});

Template.shipDesignArmorMenu.armors = function(){
  return dic.getTagged('armor');
};
