controller.TimelineController = function(gameStorage, timelineFactory)
{
  this.SaveGameTimelines = function(gameId, timelineEntries)
  {
    if (this.isSimulation){
      return;
    }

    userid = this.userId;

    timelineEntries = timelineEntries.map(function(entry){

      var timeline = timelineFactory.getTimeline(entry.id);
      var entries = entry.entries.map(function(entry){
        return new model.TimelineEntry(entry);
      });

      return {
        id: entry.id,
        timeline: timeline,
        entries: entries
      }
    });

    dic.get('order.OrderProcessor').process(userid, gameId, timelineEntries);

    timelineEntries.forEach(function(entry){
      delete(entry.timeline);
    });

    return timelineEntries;
  };
};
