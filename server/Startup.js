Meteor.startup(function () {
    var fs = Npm.require('fs');

    var files = fs.readdirSync('public/ship');

    var pattern = new RegExp(/^([a-z0-9]+)-base\.png/);
    for (var i in files)
    {
        var file = files[i];

        var name = pattern.exec(file);
        if (name)
        {
            name = name[1];
            if ( ! HullImageStorage.findByName(name))
            {
                console.log("Inserting hull image: " + name);
                HullImageStorage.insert(name);
            }
        }
    }

    var files = fs.readdirSync('public/module');

    var pattern = new RegExp(/^([a-z0-9]+)-outside\.png/);
    for (var i in files)
    {
        var file = files[i];

        var name = pattern.exec(file);
        console.log(name);
        if (name)
        {
            name = name[1];
            if ( ! ModuleImageStorage.findByName(name))
            {
                console.log("Inserting module image: " + name);
                ModuleImageStorage.insert(name);
            }
        }
    }
});