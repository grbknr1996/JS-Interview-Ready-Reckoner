//Find the maximum occuring character in gicen string
//hwllo World
//output-l

function getCharString(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });
  let max = 1;
  let char = "";
  for (let k in map) {
    if (max < map[k]) {
      max = map[k];
      char = k;
    }
  }
  return [max, char];
}

console.log(getCharString("hello world"));
