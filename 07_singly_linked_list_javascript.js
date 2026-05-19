1. Find the second largest element in an array

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

2. Rotate an array to the right by k steps

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function rotateRight(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;
  k = k % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  return arr;
}

3. Remove duplicates from a sorted array in-place

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

4. Find the maximum subarray sum (Kadane's Algorithm)

function maxSubarraySum(arr) {
  let current = arr;
  let best = arrmy = { val: 0, next: null };
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 || list2;
  return dummy.next;
}
