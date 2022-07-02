//1st Way
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//2nd Way
var p = {
  p1: "value1",
  p2: "value2",
  p3: "value3",
};

for (var key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key + " -> " + p[key]);
  }
}

//3rd Way entries()
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

var obj = { first: "John", last: "Doe" };

//OBJECT.KEYS
Object.keys(obj).forEach(function (key) {
  console.log(key, obj[key]);
});

//5TH WAY of METHOD
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

const user = {
  id: 339,
  name: "Fred",
  age: 42,
};
const { name } = user;
console.log(name); //prints: Fred

//CHANGING VARIABLE NAME
const { name: callSign } = user;
console.log(callSign); //prints: Fred

//NESTED OBJECT DESTRUCTRUCTRING
const user2 = {
  id: 339,
  name: "Fred",
  age: 42,
  education: {
    degree: "Masters",
  },
};
const {
  education: { degree },
} = user2;
console.log(degree); //prints: Masters

/**
 But what happens when the nested object is missing?

const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {education: {degree}} = user;  // TypeError: Cannot match against 'undefined' or 'null'.
We can solve this by adding a default value.

const user = {
  id: 339,
  name: 'Fred',
  age: 42
};
const {education: {degree} = {}} = user;
console.log(degree); //prints: undefined
 */
