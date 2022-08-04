abstract class Command<State> {
  abstract execute(state: State): State;
  abstract undo(state: State): State;
}

class CommandStack<State> {
  private stack: Command<State>[] = [];
  constructor(private _state: State) {}

  get state() {
    return this._state;
  }

  execute(command: Command<State>) {
    this._state = command.execute(this._state);
    this.stack.push(command);
  }

  undo() {
    const command = this.stack.pop();
    if (command) {
      this._state = command.undo(this._state);
    }
  }
}

class AddOne extends Command<number> {
  execute(state: number): number {
    return state + 1;
  }
  undo(state: number): number {
    return state - 1;
  }
}

console.log("\nAdd One\n");
const cs = new CommandStack<number>(0);
console.log(cs.state);
cs.execute(new AddOne());
console.log(cs.state);
cs.undo();
console.log(cs.state);

class SunstractOne extends Command<number> {
  execute(state: number): number {
    return state - 1;
  }
  undo(state: number): number {
    return state + 1;
  }
}

console.log("\n Substract One\n");
const cs2 = new CommandStack<number>(0);
console.log(cs2.state);
cs2.execute(new SunstractOne());
console.log(cs2.state);
cs2.undo();
console.log(cs2.state);

class SetValue extends Command<number> {
  private _originalValue?: number;
  constructor(private value: number) {
    super();
  }
  execute(state: number): number {
    this._originalValue = state;
    return this.value;
  }
  undo(state: number): number {
    return this._originalValue!;
  }
}

console.log("\nSet Value \n");
const cs3 = new CommandStack<number>(0);
console.log(cs3.state);
cs3.execute(new SetValue(42));
console.log(cs3.state);
cs3.undo();
console.log(cs3.state);
