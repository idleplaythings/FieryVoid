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
    return Npm.require('path').resolve('.') + '/../client/app/';
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

	//Module Images
	var moduleImageStorage = dic.get('model.ModuleImageStorage');
	var all = fs.readdirSync(pub+'module');
	
    files = all.filter(function(file){
		return  ! fs.lstatSync(pub+'module/'+file).isDirectory();
	});
	
	var directories = all.filter(function(file){
		return fs.lstatSync(pub+'module/'+file).isDirectory();
	});
	
	directories.forEach(function(dir){
		console.log(dir);
		
		moduleImageStorage.insert(fs.readdirSync(pub+'module/'+dir), dir);
	});
	
	moduleImageStorage.insert(files);
};
