class EventPlanner {
  constructor () {
    this.events = [];
  };

  addEvent (text, date, time) {
    this.events.push([text, date, time]);
  };
};
