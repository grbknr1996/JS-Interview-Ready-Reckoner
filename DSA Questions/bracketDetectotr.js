/**
 * 
 * 
 Given an expression string exp, write a program to examine whether the pairs 
 and the orders of "{", "}", "(", ")", "[", "]" are correct in exp.

# Example:
Input: exp = "[()]{}{[()()]()}"

Output: Balanced



Input: exp = "[(])"

Output: Not Balanced
 */
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

function checkBalance(input) {
  let closingBrackets = [")", "]", "}"];
  let inputArr = input.split("");

  let stack = new Stack();

  inputArr.forEach((element) => {
    if (closingBrackets.includes(element)) {
      if (stack.isEmpty()) {
        return "Imbalanced";
      } else {
        let item = stack.pop();
        switch (element) {
          case "(":
            if (item !== ")") return "Imabalanced";
          case "{":
            if (item !== "}") return "Imabalanced";
          case "[":
            if (item !== "]") return "Imabalanced";
        }
      }
    } else {
      stack.push(element);
    }
  });
  if (!stack.isEmpty()) return "Imbalanced";
  return "Balanced";
}

// let input = "[()]{}{[()()]()}";
// console.log(checkBalance(input));//balanced

let input2 = "[()]{}{[()()]()";
console.log(checkBalance(input2)); //imbalnced

// let input3 = "]";
// console.log(checkBalance(input2));
