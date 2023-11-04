const $ = selector => document.querySelector(selector);



const button_calculate = document.getElementById("calculate");
button_calculate.addEventListener("click", processEntry);

function processEntry() {
    const cents = Number(document.getElementById('cents').value);
    if (cents < 0 || cents > 99) {
        alert("Enter number between 0 and 99.");
    } else makeChange();
}

function makeChange() {
    const cents = Number(document.getElementById('cents').value);
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    let change = cents;

    while (change >= 25) {
        change -= 25;
        quarters += 1;
    }

    while (change >= 10) {
        change -= 10;
        dimes += 1;
    }

    while (change >= 5) {
        change -= 5;
        nickels += 1;
    }

    while (change >= 1) {
        change -= 1;
        pennies += 1;
    }

    document.getElementById("quarters").value = quarters;
    document.getElementById("dimes").value = dimes;
    document.getElementById("nickels").value = nickels;
    document.getElementById("pennies").value = pennies;

}