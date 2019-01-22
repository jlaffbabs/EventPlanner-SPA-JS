describe('EventPlanner', function () {
  describe('addEvent', function() {
    can('add an event text event array', function () {
      var eventplanner;
      eventplanner = new EventPlanner();
      eventplanner.addEvent('text', 'date', 'time')
      expect(eventplanner.events[0][0]).toEq('text')
    });
    can('add an event date to event array', function(){
      var eventplanner2;
      eventplanner2 = new EventPlanner();
      eventplanner2.addEvent('text', 'date', 'time')
      expect(eventplanner2.events[0][1]).toEq('date')
    });
    can('add an event time to event array', function(){
      var eventplanner3;
      eventplanner3 = new EventPlanner();
      eventplanner3.addEvent('text', 'date', 'time')
      expect(eventplanner3.events[0][2]).toEq('time')
    });
  });
});
