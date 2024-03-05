document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const container = document.getElementById("container");
  const nightModeCheckbox = document.getElementById("nightModeCheckbox");

  nightModeCheckbox.addEventListener("change", function () {
    const isNightMode = this.checked;
    body.classList.toggle("night-mode", isNightMode);
    container.classList.toggle("night-mode", isNightMode);
  });

  // Calculator logic
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const operation = document.getElementById("operation");
  const result = document.getElementById("result");
  const calculateButton = document.querySelector('input[type="button"]');

  calculateButton.addEventListener("click", function () {
    const operand1 = parseFloat(num1.value);
    const operand2 = parseFloat(num2.value);
    const selectedOperation = operation.value;

    if (!isNaN(operand1) && !isNaN(operand2) && selectedOperation) {
      let calculatedResult;

      switch (selectedOperation) {
        case "+":
          calculatedResult = operand1 + operand2;
          break;
        case "-":
          calculatedResult = operand1 - operand2;
          break;
        case "*":
          calculatedResult = operand1 * operand2;
          break;
        case "/":
          calculatedResult = operand1 / operand2;
          break;
        default:
          result.textContent = "Invalid operation";
          return;
      }

      result.textContent = calculatedResult;
    } else {
      result.textContent = "Please enter valid numbers and select an operation";
    }
  });
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", function () {
    // Clear input values and result
    num1.value = "";
    num2.value = "";
    result.textContent = "";
    operation.selectedIndex = 0;
  });
});
