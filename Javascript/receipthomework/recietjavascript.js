//Global Variables of prices and tax rates
var prices = [2.99, 3.67, 12.56, 4.78, 4.69, 3.70, 26.42];
//Make sure to use a zero to start a decimal
var taxrate = 0.070056112;


//For loop to display prices before calculation
function writeStuff(list) {
    for (var i = 0; i < list.length; i++){
        var x = i + 1;
        document.write('<p> The cost of item ' + x + ' is $' + (list[i]).toFixed(2) + '</p>');
    }
}



//calculates subtotal of numbers in array and returns subtotal
function totalNumbers(arrayofNumbers){
    var subtotal = 0;
    for (var i = 0; i < arrayofNumbers.length; i++){
       subtotal += arrayofNumbers[i];
    }
    return subtotal;
}

//calculate tax, and adds tax to total.
function CalculateTax(arrayofNumber, tax){
    var subtotal = totalNumbers(arrayofNumber);
    var taxtotal = Number((subtotal * tax).toFixed(2));
    var total = Number(taxtotal + subtotal);
    //Write everything to screen
    document.write('<p> The subtotal is : $' + subtotal + '</p>');
    document.write('<p> The tax is : $' + taxtotal + '</p>');
    document.write('<p> The final total is : $' + total + '</p>');
}


