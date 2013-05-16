model.EventListener = function(eventName, handleCallback)
{
    this.eventName = eventName;
    this.handleCallback = handleCallback;
};

model.EventListener.prototype.handle = function(event)
{
    if (this.handleCallback && typeof(this.handleCallback) === "function" )
        this.handleCallback(event);
};

model.EventListener.prototype.reverse = function(event){};