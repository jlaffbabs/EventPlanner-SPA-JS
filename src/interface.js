var eventplanner = new EventPlanner();
var button = document.getElementById('button');
var textinput = document.getElementById('usertext');
var timeinput = document.getElementById('usertime');
var dateinput = document.getElementById('userdate');
var eventlist = document.getElementById('eventlist');
button.addEventListener('click', function () {
  eventplanner.addEvent(textinput.value, dateinput.value, timeinput.value);
  alert('Event Added');
  eventlist.innerText = "Events: \n" + eventplanner.listEvents();
});
