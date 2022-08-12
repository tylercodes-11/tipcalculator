const form = document.getElementById('form');
const totalBill = document.getElementById("bill");
const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentage-output");
const output = document.getElementById('output');

// listeners

form.addEventListener("change", calculateTip);
tipPercentage.oninput = calculateTip;

function calculateTip() {
    const dollarsPerPerson = 
        (totalBill.value * ( tipPercentage.value / 100)).toFixed(2);

        displayTip(`$${dollarsPerPerson}`);
        displayPercentage();
    }

function displayTip(totalPerPerson){
    output.innerText = `You should tip ${totalPerPerson}`;
}
function displayPercentage() {
    percentageOutput.innerText = `${tipPercentage.value}%`;
}

calculateTip();