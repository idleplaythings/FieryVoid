var ImageLoader = function ImageLoader()
{
    this.callbacks = [];
    this.loading = 0;
}


ImageLoader.prototype.loadImage = function(src)
{
    var img = new Image();
    img.src = src;

    $(img).on('load', $.proxy(this.imageLoaded, this));

    this.loading++;

    return img;
};

ImageLoader.prototype.imageLoaded = function()
{
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

ImageLoader.prototype.isLoading = function()
{
    return this.loading > 0;
};

ImageLoader.prototype.addCallback = function(callback, thisValue, args)
{
    this.callbacks.push({callback:callback, thisValue: thisValue, args:args});
};
