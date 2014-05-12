model.ReactiveComponent = function ReactiveComponent(dispatcher, collection, sessionName, eventName, factory)
{
    this.dispatcher = dispatcher;
    this.collection = collection;
    this.sessionName = sessionName;
    this.eventName = eventName;
    this.reactivityHandle = null;
    this.modelObject = null;
    this.factory = factory;
};

model.ReactiveComponent.prototype.react = function()
{
    if (this.reactivityHandle)
        this.reactivityHandle.stop();

    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        self.modelObject = self.collection.findOne(
            {_id: Session.get(self.sessionName)});
   
        if (self.factory && self.modelObject){
            self.modelObject = self.factory.unserialize(self.modelObject);
        }

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

