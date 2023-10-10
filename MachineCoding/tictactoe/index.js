const gameContainer = document.getElementById("game-container");

const reset = document.getElementById("reset");
let hash = {};
let chance = true;
let allFilled = 0;

gameContainer.addEventListener("click", (e) => {
  console.log(e.target.dataset.index);
  if (e.target.dataset.index) {
    const [row, col] = e.target.dataset.index
      .split("-")
      .map((val) => parseInt(val));

    if (!hash[e.target.dataset.index]) {
      if (chance) {
        hash[e.target.dataset.index] = "X";
        e.target.classList.add("cell-withX");
      } else {
        hash[e.target.dataset.index] = "O";
        e.target.classList.add("cell-withO");
      }
      chance = !chance;
      allFilled++;

      let result = checkWin();
      if (allFilled === 9 || result.includes("win")) {
        document.getElementById("won").textContent = result;
        gameContainer.style.pointerEvents = "none";
      }
    }
  }
});

reset.addEventListener("click", (e) => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((val) => {
    if (val.classList.contains("cell-withX")) {
      val.classList.remove("cell-withX");
    } else {
      val.classList.remove("cell-withO");
    }
  });
  hash = {};
  allFilled = 0;
  chance = true;
  document.getElementById("won").textContent = "";
  gameContainer.style.pointerEvents = "auto";
});

function checkWin() {
  //check rows
  for (let i = 0; i < 3; i++) {
    let set = new Set();
    let player = "";
    for (let j = 0; j < 3; j++) {
      let key = `${i}-${j}`;
      set.add(hash[key]);
      console.log("set", set);
      console.log(hash[key], hash);
      player = hash[key];
    }
    if (set.size === 1 && player) {
      return `Player ${player} win`;
    }
  }

  //col
  for (let j = 0; j < 3; j++) {
    let set = new Set();
    let player = "";
    for (let i = 0; i < 3; i++) {
      let key = `${i}-${j}`;
      set.add(hash[key]);
      player = hash[key];
    }
    if (set.size === 1 && player) {
      return `Player ${player} win`;
    }
  }

  //diagonal
  let i = 0,
    j = 0;
  let set = new Set();
  let player = "";
  while (i < 3 && j < 3) {
    let key = `${i}-${j}`;
    set.add(hash[key]);
    player = hash[key];
    i++;
    j++;
  }

  if (set.size === 1 && player) {
    return `Player ${player} win`;
  }

  //anti-diagonal
  (i = 0), (j = 2);
  set.clear();
  while (i < 3 && j >= 0) {
    let key = `${i}-${j}`;
    set.add(hash[key]);
    player = hash[key];
    i++;
    j--;
  }
  if (set.size === 1 && player) {
    return `Player ${player} win`;
  }

  return "match draw";
}
