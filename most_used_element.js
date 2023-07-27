function findMostFrequentElement(arr) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement = null;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    frequencyMap[currentElement] = (frequencyMap[currentElement] || 0) + 1;

    if (frequencyMap[currentElement] > maxFrequency) {
      maxFrequency = frequencyMap[currentElement];
      mostFrequentElement = currentElement;
    }
  }

  return mostFrequentElement;
}

// Test the function
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputElement = findMostFrequentElement(inputArray);
console.log(outputElement); // Output: 3
