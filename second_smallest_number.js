function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: Array should contain at least two elements";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: All elements in the array are the same";
  }

  return secondSmallest;
}

// Test the function
const numbers = [5, 2, 8, 1, 3, 9, 4, 4];
const result = findSecondSmallest(numbers);
console.log(result); // Output: 2
