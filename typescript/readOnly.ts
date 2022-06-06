/*
Readonly<Type>
Released:
2.1

Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

Example
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello";
Cannot assign to 'title' because it is a read-only property.
Try
*/
interface Cat {
  name: string;
  breed: string;
}
type ReadOnlyCat = Readonly<Cat>;
function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  };
}

const usul = makeCat("usul", "tabby");

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
//c1[0] = 50; error you cant change

const reallyConst = [1, 2, 3] as const;
//reallyConst[0]=30;error readonly
