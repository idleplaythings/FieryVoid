model.ReactiveComponent = function ReactiveComponent(dispatcher, collection, sessionName, eventName)
{
    this.dispatcher = dispatcher;
    this.collection = collection;
    this.sessionName = sessionName;
    this.eventName = eventName;
    this.reactivityHandle = null;
    this.modelObject = null;
};

model.ReactiveComponent.prototype.react = function()
{
    if (this.reactivityHandle)
        this.reactivityHandle.stop();

    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        self.modelObject = self.collection.findOne(
            {_id: Session.get(self.sessionName)});
        
        self.dispatch();
    });
       
    return this;
};

model.ReactiveComponent.prototype.dispatch = function(payload)
{
     this.dispatcher.dispatch({name:this.eventName, payload: this.modelObject});
};

model.ReactiveComponent.prototype.get = function()
{
    return this.modelObject;
};

model.ReactiveComponent.prototype.destroy = function()
{
    this.reactivityHandle.stop();
};

