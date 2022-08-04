import { createSubscibable } from "./Subscribable-function";

const sub = createSubscibable<string>();

const unsub = sub.subscribe(console.log);
sub.publish("hello");
sub.publish("hello");
sub.publish("hello");
unsub();
sub.publish("hello");
