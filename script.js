const form = document.getElementById('form');
const bill = document.getElementById("bill");
const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentage-output");
const output = document.getElementById('output');
// listeners

form.addEventListener("change", calculateTip);
tipPercentage.oninput = calculateTip;

function calculateTip() {
    dollarsPerPerson = 
        (bill.value * ( tipPercentage.value / 100)).toFixed(2);

        displayTip(`$${dollarsPerPerson}`);
        displayPercentage();
    }

function displayTip(totalPerPerson){
    output.innerText = `You should tip ${totalPerPerson}`;
}
function displayPercentage() {
    percentageOutput.innerText = `${tipPercentage.value}%`;
}

let dollarsPerPerson;
calculateTip();



function calculatebill() {
    const totalbill = document.getElementById('billtotal');
    
    totalbill.innerHTML = +dollarsPerPerson  + +bill.value;
    
}