class EventPlanner {
  constructor () {
    this.events = [];
  };

  addEvent (text, date, time) {
    this.events.push([text, date, time]);
  };

  listEvents(){
    for(let i = 0; i < this.events.length; i++){
    console.log(this.events[i][0])
    console.log(this.events[i][1])
    console.log(this.events[i][2])
  }
  }

};
