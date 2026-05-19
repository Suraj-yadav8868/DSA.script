Stack

1. Implement a stack using an array

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

2. Implement a stack using a linked list

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new StackNode(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }
}

3. Check if parentheses are balanced in a string

function isBalanced(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const ch of str) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else if (pairs[ch]) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

4. Evaluate a postfix expression

function evaluatePostfix(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      if (token === '+') stack.push(a + b);
      else if (token === '-') stack.push(a - b);
      else if (token === '*') stack.push(a * b);
      else if (token === '/') stack.push(Math.trunc(a / b));
    }
  }

  return stack.pop();
}

5. Find the next greater element for each element in an array

function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
}