

//function alertName() {
//    var name = prompt("What is your name");
//    alert("Your name is " + name);
//}


function getFeeling(mood) {
document.getElementById('moodresult').innerHTML = mood;
return false;
}


function multiplySelf(x) {
var total = x * x;
document.getElementById('totalsq').innerHTML = total;
return false;
}

function drinkingAge(y) {
if(y >=21){
var answer = "You're old enough to buy booze. Drink up motherfucker!";
} else{
var answer ="You are not old enough drink, go fuck yourself!";
}
document.getElementById('ageanswer').innerHTML = answer;
    return false;
}

function changeText(id) {
    id.innerHTML = "Shit just got crazy!";
}



var numbers = [1, 4, 5, 6, 3, 6, 5, 7, 10];
var text = "";
for (var i = 0; i < numbers.length; i++){
    text += "Slot number " + i + " is " + numbers[i] + "<br>";
}

var totalValues = 0;
for(var k = 0; k < numbers.length; k++){
    totalValues += numbers[k]
}

var totalstring = "The total of all the number in array numbers is: " + totalValues;
document.getElementById('forloop').innerHTML = text + "<br>" +  totalstring;
