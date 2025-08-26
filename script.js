
    const display = document.getElementById("display");
    let expression = "";

    function append(char) {
      if (display.textContent === "0" || display.textContent === "Error") {
        expression = "";
      }
      expression += char;
      display.textContent = expression;
    }

    function clearDisplay() {
      expression = "";
      display.textContent = "0";
    }

    function calculate() {
      try {
        // Use Function constructor for safe eval-like behavior
        const result = new Function(`return (${expression})`)();
        expression = result.toString();
        display.textContent = expression;
      } catch (err) {
        display.textContent = "Error";
        expression = "";
      }
    }

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      const key = e.key;
      if ("0123456789.+-*/()".includes(key)) {
        append(key);
      } else if (key === "Enter") {
        e.preventDefault();
        calculate();
      } else if (key === "Backspace") {
        expression = expression.slice(0, -1);
        display.textContent = expression || "0";
      } else if (key === "Escape") {
        clearDisplay();
      }
    });
  