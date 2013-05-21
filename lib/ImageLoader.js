this.model.ImageLoader = function ImageLoader()
{
    this.callbacks = [];
    this.loading = 0;
}


this.model.ImageLoader.prototype.loadImage = function(src)
{
    this.loading++;

    var img = new Image();
    jQuery(img).on('load', $.proxy(this.imageLoaded, this));
    img.src = src;

    //console.log(img);
    return img;
};

this.model.ImageLoader.prototype.imageLoaded = function()
{
    //console.log("loaded");
    this.loading--;

    if (this.loading === 0)
    {
        while( callAndArgs = this.callbacks.pop())
        {
            var callback = callAndArgs.callback;
            var args = callAndArgs.args;
            var thisValue = callAndArgs.thisValue;

            if (typeof(args) == "function") {
                callback.call(thisValue, args.call(thisValue));
            }

        }
    }
};

this.model.ImageLoader.prototype.isLoading = function()
{
    //console.log("isloading");
    return this.loading > 0;
};

this.model.ImageLoader.prototype.addCallback = function(callback, thisValue, args)
{
    //console.log("addCallback");
    this.callbacks.push({callback:callback, thisValue: thisValue, args:args});
};
