var eventplanner = new EventPlanner();
var button = document.getElementById('button');
var textinput = document.getElementById('usertext');
var timeinput = document.getElementById('usertime');
var dateinput = document.getElementById('userdate');
var eventadded = document.getElementById('eventadded');
button.addEventListener('click', function () {
  eventplanner.addEvent(textinput.value, dateinput.value, timeinput.value);
  eventadded.innerText = 'Event Added!';
});
eventplanner.listEvents();
