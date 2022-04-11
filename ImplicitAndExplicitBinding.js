var obj = {
  name: "Gourab",
  display: function () {
    console.log(this.name);
  },
  display2: () => {
    console.log(this);
  },
};

var obj1 = {
  name: "ABC",
};

obj.display(); //Implicit binding  //Gourab

obj.display.call(obj1); //Explicit Binding //ABC

obj.display2(); //window object

/*
To summarize,

In the case of implicit binding, this binds to the object adjacent to the dot(.) operator while invoking the method.

In the case of explicit binding, we can call a function with an object when the function is outside of the execution context of the object. 
The methods call(), apply(), and bind() play a big role here.

When a function is invoked with the new keyword, the this keyword inside the function binds to the new object being constructed.

When the this keyword is not resolved with any of the bindings, implicit, explicit or new, then this is bound to the window(global) object. In JavaScript's strict mode, this will be undefined.

In HTML event handlers, this binds to the HTML elements that receive the event.
*/
