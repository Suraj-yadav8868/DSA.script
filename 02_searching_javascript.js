Searching Algorithms

1. Implement Binary Search using iteration

function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

2. Implement Binary Search using recursion

function binarySearchRecursive(arr, left, right, target) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearchRecursive(arr, mid + 1, right, target);
  return binarySearchRecursive(arr, left, mid - 1, target);
}

3. Find the first occurrence of a target element in a sorted array

function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      ans = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

4. Find the last occurrence of a target element in a sorted array

function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      ans = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

5. Search an element in a rotated sorted array

function searchRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}