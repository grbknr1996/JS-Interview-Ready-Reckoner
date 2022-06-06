interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}
// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }
type MyUserOptionals = Partial<MyUser>;

type UserWithoutID = Omit<MyUser, "id">;
/*
type UserWithoutID = {
    name: string;
    email?: string | undefined;
    phone?: string | undefined;
}
*/
const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: "foo",
      email: "dontemail@gmail.com",
    },
    {
      email: "dontemailbaz.com",
    }
  )
);
//{ name: 'Jack', id: 'foo', email: 'dontemailbaz.com' }
//required utility type//all gets required
type RequiredMyUser = Required<MyUser>;
//it means
// type RequiredMyUser = {
//   name: string;
//   id: string;
//   email: string;
//   phone: string;
// };

type JustEmailAndName = Pick<MyUser, "email" | "name">;
//it means
// type JustEmailAndName = {
//   name: string;
//   email?: string | undefined;
// };
/*
Record<Keys, Type>


Constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.

Example
interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 
const cats: Record<CatName, CatInfo>
*/
const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: "foo",
      name: "Mr.foo",
    },
    {
      id: "baz",
      name: "Mrs.baz",
    },
  ])
);
// Output:
// {
//   foo: { id: 'foo', name: 'Mr.foo' },
//   baz: { id: 'baz', name: 'Mrs.baz' }
// }

//Omit
/*
Omit<Type, Keys>
Released:
3.5

Constructs a type by picking all properties from Type and 
then removing Keys (string literal or union of string literals).

Example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
 
const todo: TodoPreview
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 
todoInfo;
   
const todoInfo: TodoInfo */
const mapByIdOmit = (users: MyUser[]): Record<string, Omit<MyUser, "id">> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};
console.log(
  mapByIdOmit([
    {
      id: "foo",
      name: "Mr.foo",
    },
    {
      id: "baz",
      name: "Mrs.baz",
    },
  ])
);
//output
//{ foo: { name: 'Mr.foo' }, baz: { name: 'Mrs.baz' } }
