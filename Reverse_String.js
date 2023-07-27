function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

// Test the function
const inputStr = "He";
const outputStr = reverseString(inputStr);
console.log(outputStr); // Output: "dlrow olleh"
