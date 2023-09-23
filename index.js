var pardiv = document.createElement("div");
pardiv.style.textAlign = "center";
pardiv.style.paddingTop = "30px";
// input
var inputdate = document.createElement("input");
inputdate.setAttribute("type", "date");
inputdate.setAttribute("id", 'date');
inputdate.style.width = "30%";
inputdate.style.margin = "10px";
// button
var button = document.createElement("button");
button.innerHTML = "Display date";
button.className = "btn btn-primary";

button.addEventListener("click", displayData);

pardiv.append(inputdate, button);

var displaydiv = document.createElement("div");
displaydiv.id = "displayData";
document.body.append(pardiv);

function displayData() {
    var input = document.getElementById("date").value;
    
    var inpdt = document.getElementById("inpdate");
    var inpdate = new Date(input);
    inpdt.innerText = `input date is ${inpdate}`;
    console.log(inpdate);

    var curdate = new Date()
    console.log(curdate);

    var milsec = document.getElementById("milsec");
    var milseconds = curdate.getTime() - inpdate.getTime();
    milsec.innerText = `Milli seconds ${milseconds}`;
    console.log(milseconds);

    var secdiff = document.getElementById("second")
    var seconddiff = mathfloor(milseconds, 1000);
    secdiff.innerText = `Seconds ${seconddiff}`;
    console.log(seconddiff);

    var mindif = document.getElementById("min")
    var mindiff = mathfloor(seconddiff, 60);
    mindif.innerText = `Minutes ${mindiff}`;
    console.log(mindiff);

    var hrdif = document.getElementById("hour");
    var hourdiff = mathfloor(mindiff, 60);
    hrdif.innerText = `Hours ${hourdiff}`;
    console.log(hourdiff);

    var daydif = document.getElementById("day");
    var daydiff = mathfloor(hourdiff, 24);
    daydif.innerText = `Day ${daydiff}`;
    console.log(daydiff);

    var mondif = document.getElementById("month")
    var monthdiff = getmondiff(inpdate, curdate);
    mondif.innerText = `Month ${monthdiff}`;
    console.log(monthdiff)

    var yeardif = document.getElementById("year");
    var yeardiff = getYear(inpdate, curdate);
    yeardif.innerText = `Year ${yeardiff}`;
    console.log(yeardiff);
}

function mathfloor(value1, value2) {
    return Math.floor(value1 / value2)
}

function getmondiff(value1, value2) {
    var year = getYear(value1, value2)
    var month = (year * 12) + (value2.getMonth() - value1.getMonth())
    return month
}

function getYear(value1, value2) {
    var d1 = new Date(value1);
    var d2 = new Date(value2);
    return d2.getFullYear() - d1.getFullYear()
}