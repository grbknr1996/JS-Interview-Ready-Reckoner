// abstract class Command<State> {
//   abstract execute(state: State): State;
//   abstract undo(state: State): State;
// }

// class CommandStack<State> {
//   private stack: Command<State>[] = [];
//   constructor(private _state: State) {}

//   get state() {
//     return this._state;
//   }

//   execute(command: Command<State>) {
//     this._state = command.execute(this._state);
//     this.stack.push(command);
//   }

// }

// class AddOne extends Command<number> {
//   execute(state: number): number {
//     return state + 1;
//   }
//   undo(state: number): number {
//     return state - 1;
//   }
// }
