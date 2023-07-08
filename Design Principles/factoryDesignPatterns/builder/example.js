/*
The Builder pattern is a design pattern that is commonly used to create complex objects step by step. 
It provides a way to construct an object by separating the construction process from its representation.
 While the Builder pattern is not a native construct in JavaScript, you can implement it using various techniques. 
 Let's explore one way to implement the Builder pattern in JavaScript.

Here's an example implementation of the Builder pattern in JavaScript:
*/
class Pizza {
  constructor() {
    this.size = null;
    this.cheese = false;
    this.pepperoni = false;
    this.bacon = false;
    // ... other pizza toppings
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addBacon() {
    this.bacon = true;
    return this;
  }

  // ... other methods for additional toppings

  build() {
    return this;
  }
}

// Usage example:
const pizza = new Pizza().setSize("medium").addCheese().addPepperoni().build();

console.log(pizza);
