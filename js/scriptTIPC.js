
//Custom function
function calculateTip() {

    // store the data of the inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // Quick validation- when input is 0 or nothing
    if(billAmount === "" || serviceQuality == 0) {
        return window.alert("Please enter some values!");
    } //this return prevents the function from continuing

    //Check to see if people input is empty or equal to 1 person
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";

    }

    // Do the Math!
    var total = (billAmount * serviceQuality) / numPeople;
    // Then round the decibel place so its not weird-
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display the tip-
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// need to create a call to a function- click button then calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };