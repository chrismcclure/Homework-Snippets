//using the *, counts the number of elements
var count = $('*').length;
//alert(count);

// counts the number of elements in the parent element of div class parent
var count2 = $('.parent').find('*').length;
//alert(count2);

//This calls function when docuemnt is ready
//Function fadeIn #para in 4 seconds
$(document).ready(function(){
    $('#para2').fadeIn(4000);
});

//This hides the paragraph with the id #para
$('p').click(function(){
    $('#para').hide();
});

//This will load after the dom is ready
$(window).load(function(){
//    alert("the window has loaded");
});

//This will load before the window is ready
$(document).ready(function(){
//    alert("The dome is ready");
});

//Image will fadeout when clicked
$('img').click(function(){
    $('img').fadeOut(3000);
});

//Image will fade Toggle when button is clicked
$('#hideButton').click(function(){
    $('#morp').fadeToggle(1000);
});

//Image will slide toggle when button is movedover
$('#slideButton').mouseover(function(){
    $("#willy").slideToggle(2000);
});

//Focus in on text input and turn background color blue
$(':text').focusin(function(){
    $(this).css('background-color','blue');
});


//Click awat form text input and turn background color to white
$(':text').blur(function(){
    $(this).css('background-color','white');
});
