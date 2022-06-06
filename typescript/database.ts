interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}
//private,protected,public
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}
class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
//myDB.db["foo"] = "baz";Property 'db' is private and only accessible within class 'InMemoryDatabase'.Property 'db' is private and only accessible within class 'InMemoryDatabase'.t
console.log(myDB.get("foo"));
console.log("/////////////////////////////");
class PersistantMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB2 = new PersistantMemoryDB();
myDB2.set("foo", "bar");
console.log(myDB2.get("foo"));
//console.log(myDB2.saveToString());

const saved = myDB2.saveToString();
myDB2.set("foo", "db2-bar");
console.log(myDB2.get("foo"));

const myDB3 = new PersistantMemoryDB();
myDB3.restoreFromString(saved);
console.log(myDB3.get("foo"));
