//anonmous function
//Watch a video on what the fuck to do
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var today = document.getElementById('today');
var future = document.getElementById('future');
var difference = document.getElementById('difference');



//Here is today's date in the format that I want
// Month, Day, Year
var todayDate =  new Date();
//Today's Date in correct format
var todaysDateFormatted = (todayDate.getMonth() + 1) + "/" + todayDate.getDate() + "/" + todayDate.getFullYear();



//This is the real date
var futureDate = new Date(2015, 9, 25);
var futureDateFormatted = (futureDate.getMonth() + 1) + "/" + futureDate.getDate() + "/" + futureDate.getFullYear();


var diffDays = Math.ceil(Math.abs((futureDate.getTime() - todayDate.getTime())/(oneDay)));
alert("absoute future date  = " + Math.abs(futureDate.getTime())/oneDay + "-" + "absoute today's date  = " + Math.abs(todayDate.getTime())/oneDay);


today.innerHTML = todaysDateFormatted;
future.innerHTML = futureDateFormatted;
difference.innerHTML = diffDays;
