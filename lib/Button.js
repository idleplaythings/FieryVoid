model.Button = function Button(contents, onClick, settings)
{
    this.contents = contents;
    this.onClick =  onClick;
    this.element = null;
    this.settings = settings || {};
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

    if (this.settings.background)
        button.css("background-image", 'url('+this.settings.background+')');

    if (this.settings.size)
        button.addClass(this.settings.size);

    button.on('click', function(e){
        e.stopPropagation();
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