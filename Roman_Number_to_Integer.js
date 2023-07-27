function romanToInteger(romanNumeral) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumeral[i];
    const nextNumeral = romanNumeral[i + 1];

    if (romanMap[currentNumeral] < romanMap[nextNumeral]) {
      result -= romanMap[currentNumeral];
    } else {
      result += romanMap[currentNumeral];
    }
  }

  return result;
}

// Test the function
const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";
const result1 = romanToInteger(romanNumeral1);
const result2 = romanToInteger(romanNumeral2);
console.log(result1); // Output: 9
console.log(result2); // Output: 21
