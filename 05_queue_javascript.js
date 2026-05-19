Queue

1. Implement a queue using an array

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }
}

2. Implement a queue using two stacks

class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop() ?? null;
  }
}

3. Find the first non-repeating character in a stream

function firstNonRepeating(stream) {
  const freq = new Map();
  const queue = [];
  const result = [];

  for (const ch of stream) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
    queue.push(ch);

    while (queue.length && freq.get(queue[0]) > 1) {
      queue.shift();
    }

    result.push(queue.length ? queue[0] : '#');
  }

  return result.join('');
}

4. Implement a circular queue

class CircularQueue {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  enqueue(value) {
    if (this.count === this.size) return false;
    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
    return true;
  }

  dequeue() {
    if (this.count === 0) return null;
    const value = this.arr[this.front];
    this.front = (this.front + 1) % this.size;
    this.count--;
    return value;
  }
}

5. Generate binary numbers from 1 to n using a queue

function generateBinaryNumbers(n) {
  const queue = ['1'];
  const result = [];

  for (let i = 0; i < n; i++) {
    const current = queue.shift();
    result.push(current);
    queue.push(current + '0');
    queue.push(current + '1');
  }

  return result;
}