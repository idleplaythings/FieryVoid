this.requestAnimFrame = (
    function(){
        return this.requestAnimationFrame    ||
            this.webkitRequestAnimationFrame ||
            this.mozRequestAnimationFrame    ||
            this.oRequestAnimationFrame      ||
            this.msRequestAnimationFrame     ||
            function( callback ){
                this.setTimeout(callback, 1000 / 60);
            };
})();