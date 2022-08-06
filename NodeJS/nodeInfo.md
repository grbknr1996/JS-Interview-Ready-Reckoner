Node.JS is a runtime environment which is single threaded
and uses a libuv library written in c.

Get something in asyncronous operation:
1.async/await
2.promises
3.callback

Async.Parrallel and Async.series?
Work parallely(multi-thread)
series is used for one after the other

# async.parallel(tasks=[], callback)

When we have to run multiple tasks independent
of each other without waiting until
the previous task has completed,
parallel comes into the picture.

```js
async.parallel(
  {
    task1: function (callback) {
      setTimeout(function () {
        console.log("Task One");
        callback(null, 1);
      }, 200);
    },
    task2: function (callback) {
      setTimeout(function () {
        console.log("Task Two");
        callback(null, 2);
      }, 100);
    },
  },
  function (err, results) {
    console.log(results);
    // results now equals to: { task1: 1, task2: 2 }
  }
);
```

# async.series(tasks=[], callback)

Series?
When we have to run multiple tasks which depend
on the output of the previous task,
comes to our rescue.

comes to our rescue.

```js
async.series(
  {
    1: function (callback) {
      setTimeout(function () {
        console.log("Task 1");
        callback(null, "one");
      }, 200);
    },
    2: function (callback) {
      setTimeout(function () {
        console.log("Task 2");
        callback(null, "two");
      }, 300);
    },
    3: function (callback) {
      setTimeout(function () {
        console.log("Task 3");
        callback(null, "three");
      }, 100);
    },
  },
  function (err, results) {
    console.log(results);
    // results is now equal to: { 1: 'one', 2: 'two', 3:'three' }
  }
);
```

6. Race?

It runs all the tasks in parallel,
but as soon as any of the function completes
its execution or passes an error to its callback,
the main callback is immediately called.

## async.queue(task, concurrency)

When we need to run a set of tasks asynchronously, a queue can be used.
A queue object based on an asynchronous function can be created which is passed as a worker.

Task: Here, it takes two parameters, first — the task to be performed and second — the callback function.

Concurrency: It is the number of functions to be run in parallel.

async.queue returns a queue object that supports few properties:

Push: Adds tasks to the queue to be processed.
Drain: The drain function is called after the last task of the queue.
Unshift: Adds tasks in front of the queue.

```js
// create a queue object with concurrency 2
var q = async.queue(function (task, callback) {
  console.log("Hello " + task.name);
  callback();
}, 2);

// assign a callback
q.drain = function () {
  console.log("All items have been processed");
};

// add some items to the queue
q.push({ name: "foo" }, function (err) {
  console.log("Finished processing foo");
});

q.push({ name: "bar" }, function (err) {
  console.log("Finished processing bar");
});

// add some items to the queue (batch-wise)
q.push([{ name: "baz" }, { name: "bay" }, { name: "bax" }], function (err) {
  console.log("Finished processing item");
});

// add some items to the front of the queue
q.unshift({ name: "bar" }, function (err) {
  console.log("Finished processing bar");
});
```
