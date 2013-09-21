model.Button = function Button(contents, onClick, settings)
{
    this.contents = contents;
    this.onClick =  onClick;
    this.element = null;
    //ᐳᐰᐅ⇧⇴⇻⋙⌦◉☢☼➤➟
};

model.Button.prototype.get = function()
{
    if ( ! this.element)
    {
        this.element = this._createButtonElement();
    }

    return this.element;
};

model.Button.prototype._createButtonElement = function()
{
    var self = this;
    var button = jQuery('<button>'+this.contents+'</button>');
    button.on('click', function(e){
        e.stopPropagation();
        console.log("clicked button");
        self.onClick();
    });
    return button;
};

model.Button.prototype.hide = function()
{
    this.get().hide();
};

model.Button.prototype.show = function()
{
    this.get().show();
};