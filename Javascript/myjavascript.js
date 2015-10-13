//alert('From External JS File');
document.getElementById("date").innerHTML = Date();

function myFunction() {

var first = parseInt(document.getElementById("num1").value);
var second = parseInt(document.getElementById("num2").value);
var third = parseInt(document.getElementById("num3").value);
var total = first * second * third;
document.getElementById("result").innerHTML = total;
return false;
};

function ReloadFunction() {
    location.reload();
};
