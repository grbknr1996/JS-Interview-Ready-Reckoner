//reverse a string using a stack
class Stack {
  constructor() {
    this.elements = [];
  }
  push(element) {
    this.elements.push(element);
  }
  pop() {
    if (this.elements.length === 0) return "Underflow";
    else return this.elements.pop();
  }
  isEmpty() {
    if (this.elements.length > 0) return false;
    else return true;
  }
}
/*
First and foremost, it is important to visualize how will we 
reverse a string to make development much easier.

The reversing of the string will follow 3 steps:

The string’s each character will be added (pushed) to the stack.
After step 1, the stack will be popped and a reversed string is created.
Return the reversed string.
*/
function reverse(str) {
  let stack = new Stack();
  let i = 0;
  let reversedStr = "";
  //adding all character to the stack
  while (i !== str.length) {
    stack.push(str[i]);
    i++;
  }
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverse("BrEAd")); //dAErB

console.log(reverse("javascript")); //tpircsavaj

//o(n)
