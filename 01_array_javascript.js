Array

1. Find the second largest element in an array
Use one pass and keep track of the largest and second largest values.

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
Use the reverse technique for an in-place solution.

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
Use two pointers and overwrite duplicates.

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
Track the current sum and the best sum.

function maxSubarraySum(arr) {
  let current = arr[0];
  let best = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    best = Math.max(best, current);
  }

  return best;
}

5. Merge two sorted arrays without using extra space
Use the gap method.

function nextGap(gap) {
  if (gap <= 1) return 0;
  return Math.ceil(gap / 2);
}

function mergeWithoutExtraSpace(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;

  for (let gap = nextGap(n + m); gap > 0; gap = nextGap(gap)) {
    let i = 0;
    let j = gap;

    while (j < n + m) {
      let a = i < n ? arr1[i] : arr2[i - n];
      let b = j < n ? arr1[j] : arr2[j - n];

      if (a > b) {
        if (i < n && j < n) {
          [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        } else if (i < n && j >= n) {
          [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
        } else {
          [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
        }
      }
      i++;
      j++;
    }
  }

  return [arr1, arr2];
}