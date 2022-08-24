console.log("hello");
const fruits = ["Mango", "Grapes", "Orange", "Watermelon", "Kiwi", "Banana"];

const text = document.getElementById("fruit");
const clear = document.getElementById("clear");

text.addEventListener("keypress", (e) => {
  console.log(e.target.value);
  let fruitsArray = [];
  if (e.target.value) {
    fruitsArray = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(e.target.value)
    );

    fruitsArray = fruitsArray.map((fruit) => `<li>${fruit}</li>`);
  }
  showFruitsArray(fruitsArray);
});

clear.addEventListener("click", () => {
  text.value = "";
});

function showFruitsArray(fruitsArray) {
  const html = !fruitsArray.length ? "" : fruitsArray.join("");
  document.querySelector("ul").innerHTML = html;
}
