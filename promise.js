// Question
// Can we use await only with promises?
// Solution
// No, we can use await with promise as well as any object that implements a then function.
const thenable = {
  then: function (callback) {
    setTimeout(() => callback(2), 100);
  },
};

const value = await thenable;
console.log(value); // 2

const promise = new Promise((resolve, reject) => {
  reject(Error("Some error occurred"));
});
promise.catch((error) => console.log(error.message));
