//Global Variables of prices and tax rates
var prices = [2.99, 3.67, 12.56, 4.78, 4.69, 3.70, 26.42];
var taxrate = .070056112;


//For loop to display prices before calculation
for (var i = 0; i < prices.length; i++){
    var x = i + 1;
    document.write('<p> The cost of item ' + x + ' is $' + prices[i] + '</p>');
}

//calculates subtotal of numbers in array and returns subtotal
function totalNumbers(arrayofNumbers){
var subtotal = 0;
for (var i = 0; i < prices.length; i++){
   subtotal += prices[i];
}
    return subtotal;
}

//calculate tax, and adds tax to total.
//Write everything to screen
function CalculateTax(arrayofNumber){
var finaltotal = 0;
var subtotal = totalNumbers(arrayofNumber);
var tax = Number((subtotal * taxrate).toFixed(2));
var total = Number(tax + subtotal);
document.write('<p> The subtotal is : $' + subtotal + '</p>');
document.write('<p> The tax is : $' + tax + '</p>');
document.write('<p> The final total is : $' + total + '</p>');
}
