function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

// Test the calculator
const num1 = 10;
const num2 = 5;
const operator = '*';
const result = calculator(num1, num2, operator);
console.log(result); // Output: 50 (10 * 5)
