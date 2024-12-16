const resultDisplay = document.getElementById("result-display");
const calcOdds = document.getElementById("calculate-odds");

function results() {
    // parse inputs
    const eQ = parseFloat(document.getElementById("improve-chance").value) / 100; // Convert percentage to decimal
    const cA = parseFloat(document.getElementById("call-amount").value);
    const potSize = parseFloat(document.getElementById("pot-size").value);

    // input validation
    if (isNaN(eQ) || isNaN(cA) || isNaN(potSize) || eQ <= 0 || eQ > 1 || cA < 0 || potSize < 0) {
        resultDisplay.innerHTML = "Please enter valid numbers. Make sure the chance you improve is between 0 and 100.";
        return;
    }

    const impliedOdds = (1 / eQ) * cA - (potSize + cA);
    resultDisplay.innerHTML = `Implied Odds: ${impliedOdds.toFixed(2)}`;
}


calcOdds.addEventListener("click", results);

