const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}
const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
};

const isLoading = (state: LoadingState) => state === loading;

console.log(isLoading(LoadingState.beforeLoad));

//literal types
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}
console.log(rollDice(3));

function sendEvent1(name: "addToCart", data: { productID: number }): void;
function sendEvent1(name: "checkout", data: { cartCount: number }): void;
function sendEvent1(name: string, data: unknown) {
  console.log(`${name}:${JSON.stringify(data)}`);
}

sendEvent1("addToCart", { productID: 123 });
