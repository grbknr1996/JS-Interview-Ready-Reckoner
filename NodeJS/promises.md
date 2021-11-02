## Promise.all()

The Promise.all() method takes an iterable of promises as
an input, and returns a single
Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error,
and will reject with this first rejection message / error.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

#### Promise.all will reject as soon as one of the Promises in the array rejects.

#### Promise.allSettled will never reject -it will resolve once all Promises in the array have either rejected or resolved.

```js
Promise.all([Promise.reject(1), Promise.resolve(2)])
.catch((err) => {
console.log('err', err);
});
output:err 1

Promise.allSettled([Promise.reject(1), Promise.resolve(2)])
.then(console.log);

output:err 1
[
{
"status": "rejected",
"reason": 1
},
{
"status": "fulfilled",
"value": 2
}
]
```
