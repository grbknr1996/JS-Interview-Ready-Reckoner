//In react we cant mutate the state
//To change a state,return a new Object
//thats why shallow copy is used

// So, it's obvious from the
// statement that if we
// mutate the state directly,
// it will change the reference of the state
// in the previous virtual DOM as well. So,
// React won't be able to see that there is a change of
// the state and so it won't be reflected in the original DOM until we reload

//Immutable datatypes
//tpes u can't change value
//example:Number,String,Boolean,Undefined,Null
//Everytime u change the  value a new copy is created
//Mutable
//Objects,Arrays,
//the original copy is updated

//Handling Immutability -using shallow copy
//signature

//Object.assign(target, ...sources);

//example
//Object.assign({}, state, { role: admin });

//Spread Operator

//const newState = { ...state, role: "admin" };

//Issues with Shallow Copying
const user = {
  name: "Cory",
  address: {
    state: "California",
  },
};
//didnt work
const userCopy = { ...user };

//working
const userCopy2 = { ...user, address: { ...user.address } };
console.log(userCopy2);
//{ name: 'Cory', address: { state: 'California' }

//Handle data changes with Immer
// import produce from "immer";
// const userCopy3 = produce(user, (draftState) => {
//   draftState.address.state = "new york";
// });
