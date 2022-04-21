/*
S.O.L.I.D
*/

//1.Single Responsibility Principle :Eveything needs to have only one reason to change

//bad

class UserSettings {
  constructor(user) {
    this.user = user;
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      //todo
    }
  }
  verifyCredentials() {
    //todo
  }
}

//Good
class UserAuth {
  constructor(user) {
    this.user = user;
  }
  verifyCredentials() {
    //todo
  }
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }
  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      //todo
    }
  }
}

//Open / Closed Principle :Software entitities should be open for extension but closed for modification

//bad

var iceCreamFlavours = ["chocolate", "vanilla"];
var iceCreamMaker = {
  makeIceCream(flavour) {
    if (iceCreamFlavours.indexOf(flavour) > -1) {
      console.log("Great you have a ice cream!!!");
    } else {
      console.log("Epic fail. no ice cream :(");
    }
  },
};
export default iceCreamMaker;

//The problem is that you cannot add a new ice cream flavour without editing
//the iceCreamFlavours Variable array

var iceCreamFlavours = ["chocolate", "vanilla"];
var iceCreamMaker = {
  makeIceCream(flavour) {
    if (iceCreamFlavours.indexOf(flavour) > -1) {
      console.log("Great you have a ice cream!!!");
    } else {
      console.log("Epic fail. no ice cream :(");
    }
  },
  addFlavour(flavour) {
    iceCreamFlavours.push(flavour);
  },
};

//Liskov substitution principle:This means that derived objects of any types must be subsitutable for their base.

//bad
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }
  setColor(color) {}
  render(area) {
    return area;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea();
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);

//good
class Shape {
  setColor(color) {
    //
  }
  render(area) {
    //
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  getArea() {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}
const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];

renderLargeShapes(shapes);

//Interface Segragation Principle

//Depndency Inversion Principle
//1.This principles states that High level module shouldnt depend on low level module both should depend on abstractions
//2. Abstraction shouldnt depend on details.Details should depend on abstraction

//bad
class InventoryRequestor {
  constructor() {
    this.REQ_METHOD = ["HTTP"];
  }
  requestItem(item) {
    //...
  }
}
