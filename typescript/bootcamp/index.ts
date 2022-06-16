/**
 - Aliases are names given to common types
 - Used for resuing common types
 */

//type aliases in typescript

type ModelNumber = number; //primitive type alias
function printCarModel(model: ModelNumber) {
  console.log(model);
}
printCarModel(2021);

//union type alias
type model = number | string;

//object type alias
type Car = {
  make: string;
  model: number;
  sedan: boolean;
};
function printCarDetails(myCar: Car) {
  console.log("My Car is " + myCar.make);
  console.log("My Car was launched in " + myCar.model);

  if (myCar.sedan) {
    console.log("My Car is sedan");
  } else {
    console.log("My Car is not a sedan");
  }
}
printCarDetails({ model: 2021, make: "Honda", sedan: true });
/*
My Car is Honda
My Car was launched in 2021
My Car is sedan
*/

/*
The "Function" type
- The global type is denoted by Function in Javascript
- It describes properties like bind ,call,apply 
*/
function printCars(callback: Function) {
  callback(2021, "BMW");
}

printCars((model: number, make: string) => {
  console.log("Car model is " + model);
  console.log("Car make is " + make);
});

/*Interfaces
Notes:
Interfaces are yet another way to name Object types

*/
interface ICar {
  make: string;
  model: string | number;
  sedan: boolean;
  accelerate: () => void;
  decelerate(): void;
}
function printCarDetailsInterfaceFunction(myCar: ICar) {
  console.log("My Car is " + myCar.make);
  console.log("My Car was launched in " + myCar.model);
}
printCarDetailsInterfaceFunction({
  make: "hyundai",
  model: 2009,
  sedan: false,
  accelerate: () => {
    console.log("Accelerated the car");
  },
  decelerate: () => {
    console.log("Decelerated the car");
  },
});

/*
The Object Type
*/
type CarObj2 = { make: string; model: number };

function printCarObjDetails(carObj: CarObj2) {
  console.log("My Car was launched in " + carObj.model);
  console.log("My Car  manufacturer is " + carObj.make.toUpperCase());
}

//interfaces and type aliases

//type alias able to rename on a type
type StringPrimitive = string;
type NumberPrimitive = number;

//interfaces cant have value as types
//error interface String interface=string
//interface stringw=string;//error

//extensibility is possible in interface but not in types
/**
 * New fields can be added to the interface
 * A type cannot be changed after creation
 */

// type BikeType = {
//   make: string;
// };
//---> type BikeType = {---->error
//   model: number;
// };

interface Ibikes {
  model: string;
}
interface Ibikes {
  make: number;
}

//Extrensibility

interface CarInterface {
  make: string;
  model: number;
}
interface MustangInterface extends CarInterface {
  drift: boolean;
}

const myCar2: MustangInterface = {
  make: "ford",
  drift: true,
  model: 2006,
};

type CarType2 = {
  make: string;
  model: number;
};

type MustangType = CarType2 & {
  drift: boolean;
};

const myCar3: MustangType = {
  make: "ford",
  drift: true,
  model: 2006,
};
/**
 * Notes:-
 * You can extend an interface but you cannot extend a type
 * Instead you can use intersection to acheive the same
 */

/**
 * Special type | "any"
 * You can do whatever with this type TS will not throw any error
 */
let car: any = "bmw";
car = "Honda";
car = 2021;

/**
 * Special type | "unknown"
 */
let a: unknown = document.getElementById("my-element");

//you can do whatever you want with any type
function getLatestCarModelv1(models: any) {
  return models[0];
}
//you cannot do whatever you want with unknown type
// function getLatestCarModelv2(models: unknown) {
//   return models[0]; //error
// }

/**
 * notes
 * It is similar to any type
 * it is a little bit safer than any type
 */

//special type |void
/**
 * In Javascript a function that doesnt have any return value implicitly return the value undefined
  but in typescript it is void
 
  *void and undefined are not the same thing in typescript
  void is a special type 
  undefined is a primitive type

 */
function printCarName(): void {
  console.log("bmv");
}
