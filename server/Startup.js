Meteor.startup(function () {

    crawlResources();

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
        console.log('created admin account');
    }
});

function getPublicPath()
{
    var fs = Npm.require('fs');
    if (fs.existsSync('public/'))
        return 'public/'

    return 'static/';
}

function crawlResources()
{
    var pub = getPublicPath();
    var fs = Npm.require('fs');

    var files = fs.readdirSync(pub+'ship');

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

    files = fs.readdirSync(pub+'module');

    var pattern = new RegExp(/^([a-zA-Z0-9]+)-outside\.png/);
    for (var i in files)
    {
        var file = files[i];

        var name = pattern.exec(file);
        if (name)
        {
            name = name[1];
            var inside = fs.existsSync(pub+'module/'+name+'-inside.png');
            var outside = fs.existsSync(pub+'module/'+name+'-outside.png');
            var hull = fs.existsSync(pub+'module/'+name+'-hull.png');
            var over = fs.existsSync(pub+'module/'+name+'-over.png');
            var under = fs.existsSync(pub+'module/'+name+'-under.png');

            ModuleImageStorage.insert(name, inside, outside, hull, over, under);
        }
    }
};