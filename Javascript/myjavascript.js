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


//numbers and stuff
var stringThirtyEight = "38";
var intThriryEight = 38;
var intTwentyEight = 28;
var totalsum = intThriryEight + intTwentyEight;
var totalproduct = intThriryEight * intTwentyEight;

//strings and stuff
var name = "Chris ";
var verb = "Rules ";
var adverb = "Hard ";
var sentence = name + verb + adverb;

//Add string and int
var wtf = name + intThriryEight + totalproduct + verb;

//Booleans
var ten = 10;
var nine = 9;
var a = null;

//array stuff
var pies = ["Peach","Apples","Key Lime", "Chocolate"];
var desserts = ["cookies", "cakes", pies];
var sentenceArray = [name, verb, adverb];
var randomStuff = ["Dog", "Car", "Rock", 25, 85, desserts];

// all my logs, yo!
console.log(stringThirtyEight);
console.log(intThriryEight);
console.log(intThriryEight + intTwentyEight);
console.log(totalsum);
console.log(totalproduct);
console.log(name + "is not " + intTwentyEight + " or " + intThriryEight);
console.log(sentence);
console.log(wtf);
console.log(Boolean(ten > nine));
console.log(Boolean(nine > ten));
console.log(Boolean(a));
console.log(Boolean(sentence.length > name.length));
console.log(Boolean(sentence.length < name.length));
console.log(Boolean(adverb.length > name.length));

//calling stuff from my arrays
console.log(pies[1]);
console.log(desserts[0]);
console.log(sentenceArray[2]);

// JUst for good measure, a loop for my array of arrays with an array in it
var text = " ";
var i;
for (i = 0; i < randomStuff.length; i++) {
    text += randomStuff[i] + "<br>";
}

document.getElementById("array").innerHTML = text;










