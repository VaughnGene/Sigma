function calculatePercentageAmounts(dollarAmount, customPercentages) {
    const presetPercentages = [40, 10, 30, 15, 5];
  
    if (customPercentages.length === 0) {
      customPercentages = presetPercentages;
    } else {
      customPercentages = customPercentages.map((percentage) => parseFloat(percentage));
    }
  
    const result = {};
  
    for (const percentage of customPercentages) {
      if (isNaN(percentage) || percentage < 0) {
        alert("Please enter valid positive percentage values.");
        return null;
      }
  
      const percentageAmount = dollarAmount * (percentage / 100);
      result[percentage + "%"] = percentageAmount;
    }
  
    return result;
  }
  
  function calculateAndDisplay() {
    const dollarAmountInput = document.getElementById("dollar-amount");
    const dollarAmount = parseFloat(dollarAmountInput.value);
  
    if (isNaN(dollarAmount)) {
      alert("Please enter a valid dollar amount.");
      return;
    }
  
    const customPercentagesInput = document.getElementById("custom-percentages");
    const customPercentages = customPercentagesInput.value.split(",");
  
    const percentageAmounts = calculatePercentageAmounts(dollarAmount, customPercentages);
    if (percentageAmounts === null) {
      return; // Exit early if there was an error with custom percentages
    }
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    for (const percentage in percentageAmounts) {
      const percentageAmount = percentageAmounts[percentage];
      const resultElement = document.createElement("p");
      resultElement.textContent = `${percentage}: $${percentageAmount.toFixed(2)}`;
      resultsDiv.appendChild(resultElement);
    }
  }
  