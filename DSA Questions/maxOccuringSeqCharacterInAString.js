//addb
//output ->2 , dd
//abbbcaba
//output->3, bbb
//accacccbcccc
//outputput->4

const repeat = (str) => {
  let maxOccurance = 0;
  let char = "";
  let map = {
    char: "",
    occurance: 0,
  };

  for (let i = 0; i < str.length; i++) {
    map.char = str[i];
    map.occurance = map.occurance + 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === map.char) {
        map.occurance++;
      }
      if (str[j] !== map.char) {
        break;
      }
    }

    if (maxOccurance < map.occurance) {
      maxOccurance = map.occurance;
      char = map.char;
      map.occurance = 0;
      map.char = "";
    }
    map.occurance = 0;
    map.char = "";
  }
  return {
    maxOccurance,
    char,
  };
};

console.log(repeat("addb"));
console.log(repeat("abbbcaba"));
console.log(repeat("accacccbcccc"));
