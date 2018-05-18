function calculateTip() {
    var billAmount = Number(document.getElementById("bill").value);
    var tipamt = Number(document.getElementById("tipAmount").value);
    var numOfPeople = Number(document.getElementById("calculate").value);

    //check values
    if (billAmount === "" || tipamt == 0) {
        alert("Amount must be greater than zero");
        return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "inline";
    }

    //tip per person
    var total = ((billAmount * tipamt) * .01) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //total per person
    var totalPerson = ((total * numOfPeople) + billAmount) / numOfPeople;
    totalPerson = Math.round(totalPerson * 100) / 100;
    totalPerson = totalPerson.toFixed(2);

    //full amount due
    var fullAmount = ((total * numOfPeople) + billAmount);
    fullAmount = Math.round(fullAmount * 100) / 100;
    fullAmount = fullAmount.toFixed(2);

    //display all
    document.getElementById("totalTip").style.display = "inline";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("personTotal").style.display = "inline";
    document.getElementById("tp").innerHTML = totalPerson;
    document.getElementById("fullAmount").style.display = "inline";
    document.getElementById("fa").innerHTML = fullAmount;

}

//hide all
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("personTotal").style.display = "none";
document.getElementById("totPerson").style.display = "none";
document.getElementById("fullAmount").style.display = "none";

//call function
document.getElementById("calculate").onchange = function () {
    calculateTip();
};