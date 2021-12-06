class Stack {
  constructor(length) {
    this.data = new Array(length);
    this.top = -1;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[this.top];
  }

  add(value) {
    this.top += 1;

    this.data[this.top] = value;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const element = this.data[this.top];

    this.top -= 1;

    return element;
  }

  isEmpty() {
    return this.top === -1;
  }

  serialize() {
    return this.data.slice(0, this.top + 1);
  }
}

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  const stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === "b") {
      continue;
    }

    if (char === "c") {
      const lastChar = stack.peek();

      if (lastChar === "a") {
        stack.pop();
        continue;
      }
    }

    stack.add(char);
  }

  return stack.serialize().join("");
}

console.log(removeChars("ab"));
console.log(removeChars("abc"));
console.log(removeChars("cabbaabcca"));
console.log(removeChars("ababaac"));
