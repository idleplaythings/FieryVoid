var customMatchers = {
    toHaveListenerFor: function(eventName) {
        var matching = this.actual.attach.calls.filter(function(call) {
            if (call.args[0] !== eventName) {
                return false;
            }

            if (typeof call.args[1] !== 'function') {
                return false;
            }

            return true;
        });

        return matching.length > 0;
    }
};
