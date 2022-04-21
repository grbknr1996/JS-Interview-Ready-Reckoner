//input-1234
//output:1+2+3+4=10=1+0=1

//input-123
//output:1+2+3=6

const magicNumberWithTwist = (number) => {
  let num = number;
  while (num > 9) {
    let sum = 0;
    let rem = 0;
    while (num != 0) {
      rem = Math.floor(num % 10);
      num = Math.floor(num / 10);
      sum = sum + rem;
    }
    num = sum;
  }
  return num;
};

console.log(magicNumberWithTwist(1234));
console.log(magicNumberWithTwist(123));
