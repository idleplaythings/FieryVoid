model.Event = function(origin, name)
{
    if (origin !== "player" && origin !== "server")
        throw 'Only origins "player" and "server" are supported!';

    this.origin = origin;
    this.id = "ID NOT SET";
    this.name = name;
};

model.Event.prototype.setId = function(id)
{
    this.id = id;
};