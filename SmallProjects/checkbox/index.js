const all = document.getElementById("all");

all.addEventListener("click", toggle);

function toggle() {
  const isChecked = all.checked;

  Array.from(document.getElementsByTagName("input")).forEach((element) => {
    element.checked = isChecked;
  });
}

Array.from(document.getElementsByTagName("input:not(#all)")).forEach(
  (element) => {
    element.addEventListener("click", uncheckAll);
  }
);

function uncheckAll() {
  all.checked = false;
}
