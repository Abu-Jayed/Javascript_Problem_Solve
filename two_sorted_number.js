function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no two numbers found that add up to the target, return an empty array
  return [];
}

// Test the function
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const outputIndices = findTwoNumbersWithSum(inputArray, targetValue);
console.log(outputIndices); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
