import { Subscibable } from "./Subscribable-class";

const sub = new Subscibable<string>();

const unsub = sub.subscribe(console.log);
sub.publish("hello");
sub.publish("hello");
sub.publish("hello");
unsub();
sub.publish("hello");

export class DataClass extends Subscibable<number> {
  constructor(public value: number) {
    super();
  }
  setValue(v: number) {
    this.value = v;
    this.publish(v);
  }
}

const dc = new DataClass(0);
const dcunsub = dc.subscribe((v: number) => console.log(`DC:${v}`));
const dcunsub2 = dc.subscribe((v: number) => console.log(`DC2:${v}`));
dc.setValue(42);
dcunsub();
dcunsub2();
