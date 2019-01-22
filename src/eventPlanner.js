class EventPlanner {
  constructor () {
    this.events = [];
  };

  addEvent (text, date, time) {
    this.events.push([text, date, time]);
  };

  listEvents(){
    for(let i = 0; i < this.events.length; i++){
      return "On " + this.events[i][1] + " at " + this.events[i][2] + " You have: \n" + this.events[i][1];
    };
  };

};
