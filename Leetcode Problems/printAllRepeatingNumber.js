/**
 arr =[1,2,3,5,3,5,1]
 output:[1,5]


 */

const printAllRepeatingNumber = (arr) => {
  let res = [];
  arr.forEach((value, index) => {
    if (arr.indexOf(value) === index && arr.lastIndexOf(value) === index) {
      return;
    } else {
      if (!res.includes(value)) {
        res.push(value);
      }
    }
  });
  return res;
};

console.log(printAllRepeatingNumber([1, 1, 2, 3, 4, 5, 3, 5, 1, 7, 7, 7]));
