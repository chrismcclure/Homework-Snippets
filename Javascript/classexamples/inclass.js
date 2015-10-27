var name = "Chris";
document.getElementById('myname').innerHTML = name;

var age = 29;
function calAge(age){
var tenYearsFromNow = age + 10;
document.getElementById('aboutme').innerHTML = "I am " + age + " years old and in 10 years I will be " + tenYearsFromNow;
}

calAge(age);

function favAnimal(animal){
document.getElementById('myfact').innerHTML = "I love animals but " + animal + " are the best!! :)";
}
