controller.TimelineController = function(gameStorage, timelineFactory, timelineStorage)
{
    this.SaveGameTimelines = function(gameId, timelineEntries)
    {
        if (this.isSimulation)
            return;

        //TODO: load game, and check current player is alloved to persist these timelines
        context = {gameId: gameId};

        timelineEntries.forEach(function(entry){
            console.log(entry);
            var timeline = timelineFactory.getTimeline(entry.id);
            var entries = entry.entries.map(function(entry){
                entry.context = context;
                return new model.TimelineEntry(entry);
            });

            new model.TimelineRemoteSaver(timeline, entries, timelineStorage).persist();
            entry.entries = entries;
        });

        return timelineEntries;
    };
};
