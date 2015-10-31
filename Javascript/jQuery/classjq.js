var items = [];
var $button = $('#clicky');


$button.click(function(){
    var todo = $('#text').val();
    var $list = $('<li>', {
                    click: click,
                    addClass: "thing",
                    text: todo
    });


    $list.appendTo('#list');
 //  $list.prependTo('#list'); pushes new item to the top of the list
//  $('#list').append($list);  Opposite version of appendTo
    items.push($list);
    numberofTasks();
       $('#text').val('');
});


function click(){
    var getRid =  $(this);
    getRid.addClass("done");
    var numnber = items.indexOf(getRid);
    items.splice(numnber, 1);
//    getRid.remove();
    numberofTasks();
}

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $button.click();
    }

});


function numberofTasks(){
$('#number').text(items.length);
};

numberofTasks();
