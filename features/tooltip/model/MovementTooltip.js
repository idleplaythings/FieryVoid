model.MovementTooltip = function MovementTooltip(gameContainer, dispatcher)
{
    model.TooltipView.call(this, gameContainer, dispatcher);
    this.htmlClass = 'movementtooltip';
};

model.MovementTooltip.prototype = Object.create(model.TooltipView.prototype);

model.MovementTooltip.prototype.display = function(ship, position, route, routeIndex)
{
    var steps = route.getActionsAsSteps();
    var step = steps[routeIndex];
    var routeStep = route.getRoute()[routeIndex];

    var template = this.getTemplate();
    template.html('');
    template.append('<h4>Actions</h4>');

    for (var i in step.actions){
        var action = step.actions[i];
        var cost = step.costs[i];

        if ( ! cost.isFree())
            template.append('<p><span>'+action.getDisplayName()+'</span><span class="cost">'+ cost.toDisplayString()+'</span></p>');
    }

    template.append('<h4>Current</h4>');
    template.append('<p><span>Turn delay</span><span class="cost">' + routeStep.getTurnDelay() +'</span></p>');

    template.append('<h4>Remaining</h4>');
    template.append('<p><span>Thrust</span><span class="free">' + route.getThrusterUsage().getAvailableThrust() +'</span></p>');
    template.append('<p><span>Capacity</span><span class="free">'+ route.getThrusterUsage().getThrustCapacityAvailable().toDisplayString() +'</span></p>');

    this.position(position);
};

model.MovementTooltip.prototype.position = function(position)
{
    this.getTemplate().css(
        {
            'left': (position.x)+ 'px',
            'top': (position.y + 20) + 'px'
        })
        .show();
};