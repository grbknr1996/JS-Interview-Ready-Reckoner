//Events Module

//Node.js  has a built-in module called events,
// where u can create, fire and listen for events

//Example 1 --Registering for the event to be fired
//only one time using once

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("sayMyName is fired!");
});

event.on("sayMyName", () => {
  console.log("sayMyName is fired!!");
});
event.on("sayMyName", () => {
  console.log("sayMyName is fired!!!");
});

event.emit("sayMyName");

//The concept is quite simple emitter objects emit named events
//..that cause previously registered listeners to be called
//basically it has 2 main features:

//1.Emitting named events
//2.Registering and unregistering listener fumctions

//Example 2 --Create an event emitter instance and register
//a couple of callbacks

//Example 3 --Registering for the event with callnack parameters

const event2 = new EventEmitter();

event2.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event2.emit("checkPage", 200, "ok");

/*Output:
sayMyName is fired!
sayMyName is fired!!
sayMyName is fired!!!
status code is 200 and the page is ok 
*/
