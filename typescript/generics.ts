// generics, that is, being able to create a component
//that can work over a variety of types
// rather than a single one.
//example
function identity<Type>(arg: Type): Type {
  return arg;
}
let output = identity<string>("myString");

function simpleStringState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [str2getter, str2setter] = simpleStringState(10);
console.log(str2getter());
str2setter(62);
console.log(str2getter());

const [str3getter, str3setter] = simpleStringState<string | null>(null);
console.log(str3getter());
str3setter("str");
console.log(str3getter());
//Outputs:-
// 10;
// 62;
// null;
// str;

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megasaur",
    hp: 5,
  },
];

const ranks = ranker<Pokemon>(pokemon, ({ hp }) => hp);
console.log(ranks); //[ { name: 'Megasaur', hp: 5 }, { name: 'Bulbasaur', hp: 20 } ]

//challenge#1
//To reproduce forEach ,filter and map using reduce

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a: T[], v) => (filterFunc(v) ? [...a, v] : a), []);
}

console.log(myFilter([2, 3, 4, 6], (v) => v % 2 === 0));

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => (v * 10).toString()));
//output
//["10", "20", "30", "40", "50", "60", "70", "80"];

//keyOf
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dog = [
  { name: "mimi", age: 12 },
  { name: "LG", age: 13 },
];

console.log(pluck(dog, "age")); //[ 12, 13 ]
console.log(pluck(dog, "name")); //[ 'mimi', 'LG' ]

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 123,
});
sendEvent("checkout", { time: 120, user: "bob" });
//output
// ["addToCart", { productID: "foo", user: "baz", quantity: 1, time: 123 }]

//[
//  ("checkout", { time: 120, user: "bob" })
// ];
