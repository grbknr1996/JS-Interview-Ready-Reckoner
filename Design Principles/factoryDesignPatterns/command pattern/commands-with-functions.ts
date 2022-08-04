type CommandFunction<State> = (
  state: State
) => [State, (state: State) => State];

function createCommandStack<State>(state: State) {
  const stack: ((state: State) => State)[] = [];
  let _state = state;

  return {
    execute(command: CommandFunction<State>) {
      const [newState, undoFunction] = command(_state);
      _state = newState;
      stack.push(undoFunction);
      return _state;
    },

    undo() {
      const command = stack.pop();
      if (command) {
        _state = command(_state);
      }
      return _state;
    },
  };
}

const addOne: CommandFunction<number> = (state) => [
  state + 1,
  (state) => state - 1,
];

const cStack = createCommandStack(0);
console.log(cStack.execute(addOne));
console.log(cStack.undo());

const createSetValue = (value: number): CommandFunction<number> => {
  return (state) => {
    const _originalState = state;
    return [value, () => _originalState];
  };
};

const setTo42 = createSetValue(42);
console.log(cStack.execute(setTo42));
console.log(cStack.undo());
