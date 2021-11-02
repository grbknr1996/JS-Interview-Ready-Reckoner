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
