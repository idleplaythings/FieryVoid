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
        if (name)
        {
            name = name[1];
            var inside = fs.existsSync('public/module/'+name+'-inside.png');
            var outside = fs.existsSync('public/module/'+name+'-outside.png');
            var hull = fs.existsSync('public/module/'+name+'-hull.png');

            console.log(name + " hull " + hull);
            ModuleImageStorage.insert(name, inside, outside, hull);
        }
    }


    var admin = Meteor.users.findOne({'isAdmin' : true});
    if (! admin)
    {
        Accounts.createUser(
            {
                username: 'admin',
                email: 'admin@fieryvoid.net',
                password: 'kiiski'
            }
        );
        Meteor.users.update({'username': 'admin'}, {$set: {'isAdmin': true}});
        console.log('created admin accountpirate');
    }
});