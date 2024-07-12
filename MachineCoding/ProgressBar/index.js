const root = document.getElementById("root");
let count = 0;

function add() {
  if (count === 0) {
    create();
  }

  count += 1;
}

function create() {
  const ele = document.createElement("div");
  ele.classList.add("progressBar");
  ele.style = "transition: width 5s ease";

  root.appendChild(ele);

  setTimeout(() => {
    ele.classList.add("transition");
  }, 50);

  ele.addEventListener("transitionend", () => {
    count -= 1;
    if (count >= 1) {
      create();
    }
  });

  ele.removeEventListener("transitionend", () => {});
}
