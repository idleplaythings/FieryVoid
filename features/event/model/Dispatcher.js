model.EventDispatcher = function EventDispatcher()
{
    this.listeners = {};
};

model.EventDispatcher.prototype.attach = function(eventName, listener, priority)
{
    if (typeof priority === 'undefined') {
        priority = 0;
    }

    listener.__priority = priority;
    this._attachListener(eventName, listener);

    return listener;
};

model.EventDispatcher.prototype.detach = function(eventName, listener)
{
    this.listeners[eventName] = this.listeners[eventName].filter(function(entry){
        return entry != listener;
    });
};


model.EventDispatcher.prototype._attachListener = function(eventName, listener)
{
    this._initListenersArray(eventName);
    this._addListener(eventName, listener);
    this._sortListeners(eventName);
};

model.EventDispatcher.prototype._initListenersArray = function(eventName)
{
    if (typeof this.listeners[eventName] === 'undefined') {
        this.listeners[eventName] = [];
    }
};

model.EventDispatcher.prototype._addListener = function(eventName, listener)
{
    this.listeners[eventName].push(listener);
};

model.EventDispatcher.prototype._sortListeners = function(eventName)
{
    this.listeners[eventName].sort(function(a, b) {
        return b.__priority - a.__priority;
    });
};

/**
 *
 * @param event must have property called name
 */
model.EventDispatcher.prototype.dispatch = function(event)
{
    this._initListenersArray(event.name);
    this.listeners[event.name].every(this._dispatchEvent(event));
};

model.EventDispatcher.prototype._dispatchEvent = function(event) {
    return function(listener) {
        listener(event);

        if (event.stopped) {
            return false;
        }

        return true;
    };
};
