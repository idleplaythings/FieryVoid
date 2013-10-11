Extend = {
    objects: {},
    unresolved: [],

    register: function(child, parentName)
    {
        this.objects[child.name] = child;

        if (parentName) {
            this.unresolved.push([ child, parentName ]);
        }

        return child;
    },

    resolve: function()
    {
        var unresolved = this.unresolved.slice(0);
        var args;
        while (unresolved.length) {
            args = unresolved.pop();
            this._extend.apply(this, args);
        }
    },

    _extend: function(child, parentName)
    {
        if (!this.objects[parentName]) {
            this.unresolved.push([ child, parentName ]);
            return false;
        }

        var parentClass = this.objects[parentName];
        var _prototype = Object.create(child.prototype);

        child.prototype = Object.create(parentClass.prototype);
        child.prototype = _.extend(child.prototype, _prototype);
        child.prototype.super = parentClass;
    }
};
