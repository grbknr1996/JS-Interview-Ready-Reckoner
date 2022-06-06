//[1,2,3,4,3,5,4,6,7,8] ==> total elements -10
//count largest sum of consecutive digits

//num=4
//output sum=25 (4+6+7+8)

//condition
//num should be less than arr.length
//10-4+1=>7

function findLargest(array, num) {
  if (num > array.length) {
    return "Not Possible Number is not greater than array";
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let tmp = 0;
      for (let j = 0; j < num; j++) {
        console.log("i" + i + " j", j);
        tmp += array[i + j];
      }
      if (tmp > max) {
        max = tmp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("result=", result);
