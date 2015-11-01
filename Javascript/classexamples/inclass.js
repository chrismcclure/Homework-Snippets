document.getElementById('submit').onclick = favAnimal;
document.getElementById('ageCalc').onclick = calAge;

var name = "Chris";
document.getElementById('myname').innerHTML = name;

var age = 29;

function calAge() {
    var userage = Number(document.getElementById('currentage').value);
    var yearstoadd = Number(document.getElementById('yearstoadd').value);
    var tenYearsFromNow = userage + yearstoadd;
    var string = "I am " + userage + " years old and in " + yearstoadd + " years I will be " + tenYearsFromNow;
    document.getElementById('aboutme').innerHTML = string;
}

function favAnimal() {
    var input = document.getElementById('animal').value;
    var animalString = "I love animals but " + input + " are the best!! :)"
    document.getElementById('myfact').innerHTML = animalString;
}
