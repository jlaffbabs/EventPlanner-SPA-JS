describe('EventPlanner', function () {
  describe('addEvent', function() {
    can('add an event to event array', function () {
      var eventplanner;
      eventplanner = new EventPlanner();
      eventplanner.addEvent('text', 'date')
      expect(eventplanner.events[0]).toEq(['text', 'date'])
    });
  });
});
