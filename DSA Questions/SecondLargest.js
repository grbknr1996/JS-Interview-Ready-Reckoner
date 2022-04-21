let myArr = [17, 21, 36, 22, 15, 43, 45];

//1st way
console.log("2nd Smallest Element", myArr.sort()[1]);
console.log("2nd Largest Element", myArr.sort()[myArr.length - 2]);

//2nd way
console.log("2nd largest Element", myArr.sort().reverse()[1]);

//3rd way

const getSecondLargestNumber = (arr = []) => {
  let largestNumber = arr[0];
  let secondLargestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  return secondLargestNumber;
};
