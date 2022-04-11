/*
Method chaining is the mechanism of calling a method on another method of the same object. 
This ensures a cleaner and readable code. Method chaining uses this keyword in the object's class to access its methods. 
In javascript, the this keyword refers to the current object in which it is called.
*/

class Arithmetic {
  constructor() {
    this.value = 0;
  }
  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  addition(value) {
    this.value = this.value + value;
    return this;
  }
  subtraction(value) {
    this.value = this.value - value;
    return this;
  }
  average(...args) {
    this.value = args.length
      ? this.sum(...args).value / args.length
      : undefined;
    return this;
  }
}

const Arithmetic1 = new Arithmetic();
console.log(Arithmetic1.sum(1, 3, 6).subtraction(3).addition(4).value);

/*
Arithmetic1
  .sum(1, 3, 6)   // => { value: 10 } 
  .subtract(3)   // => { value: 7 }
  .add(4)        // => { value: 11 }
  .value         // => 11 
*/
