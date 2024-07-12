const arr = [1, -1, -1, 2, 3, 4];

arr.sort((a, b) => {
  if (a < 0 && b >= 0) {
    return 1;
  } else if (a >= 0 && b < 0) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr); //[ 1, 2, 3, 4, -1, -1 ]
