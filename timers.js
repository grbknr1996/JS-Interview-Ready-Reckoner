/*
NodeJS provides three ways to call asynchronous functions
1.setImmediate()
Use setImmediate() when you want to execute some functions
asynchronously , but as soon as possible and after finishig the
current block (execution at the end of the event(callback) queue iteration)

2.setTimeout()
Use setTimeout() when you want to execute some functions asynchronously ,after
a specified delay and after finishing the current block.

3.process.nextTick()
Callbacks scheduled using process.nextTick() will be processed 
after the execution of the current phase
(execution at the beggining of the event(callback) queue iteration)
*/
//ex:1

setTimeout(() => {
  console.log("called settimeout!");
});

//ex:2
setImmediate(() => {
  console.log("called setimmediately");
});

process.nextTick(() => {
  console.log("process nextTick");
}, 0);
console.log("first");
//Output:-
// first
// process nextTick
// called settimeout!
// called setimmediately

// Callback Queue: After the timer gets expired, the callback function is put inside the Callback Queue,
// and the Event Loop checks if the Call Stack is empty and if empty,
// pushes the callback function from Callback Queue to Call Stack and the callback function
// gets removed from the Callback Queue.
// Then the Call Stack creates an Execution Context and executes it.

// Microtask Queue: Microtask Queue is like the Callback Queue, but Microtask Queue has higher priority.
//  All the callback functions coming through Promises and Mutation Observer will go inside the Microtask Queue.
//  For example, in the case of .fetch(), the callback function gets to the Microtask Queue.
//  Promise handling always has higher priority so the JavaScript engine executes all the tasks from Microtask Queue and then moves to the Callback Queue.
