describe('EventPlanner', function () {
  describe('#listEvent', function() {
    var eventplanner;
    eventplanner = new EventPlanner();
    eventplanner.addEvent('text', 'date', 'time')
    eventplanner.addEvent('text2', 'date2', 'time2')
    eventplanner.addEvent('text3', 'date3', 'time3')
    can('have multiple events and read them all', function () {
      expect(eventplanner.events[0][0]).toEq('text')
      expect(eventplanner.events[1][1]).toEq('date2')
      expect(eventplanner.events[2][2]).toEq('time3')
    });
  });
  describe('#addEvent', function () {
    var eventplanner;
    eventplanner = new EventPlanner();
    eventplanner.addEvent('a', 'b', 'c')
    can('add an event', function () {
      expect(eventplanner.events[0][0]).toEq('a')
      expect(eventplanner.events[0][1]).toEq('b')
      expect(eventplanner.events[0][2]).toEq('c')
    });
  });
});
