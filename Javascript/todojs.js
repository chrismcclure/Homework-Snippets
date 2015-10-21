//One Array To Rule Them All!
//empty array to fill with list items that contain the todo items

var stuffOnYourBrowser = localStorage;
var index = stuffOnYourBrowser.length;

//Upon load I need to have a funtion that display all the items in local storage
//for each value in local storage, append to my myList

//Function, upon Button Click Add User Item to Array of Todos
function addItemToDoToList(item) {
    //Incre
    index++;

    //createinput checkbox and it's attributes
    var checkboxitem = document.createElement('input');
    checkboxitem.type = "checkbox";
    checkboxitem.name = item;
    checkboxitem.className = "todoitem";
    checkboxitem.id = index;

    // took a while to figure out that I didn't need quotes or () to call function
    checkboxitem.onclick = rem;

    //create label for each checkbox
    var label = document.createElement('label');
    label.htmlfor = "todoitem";
    label.appendChild(document.createTextNode(item));

    //create list item
    var node = document.createElement("LI");

    // add list items to local storage
    stuffOnYourBrowser.setItem(index, item);

    //append both the checkbox and label to each list item
    node.appendChild(checkboxitem);
    node.appendChild(label);

    //append li to ul id="myList"
    document.getElementById("myList").appendChild(node);

    // Display total number of items in todo list
    itemsInList(stuffOnYourBrowser);

    //Clear the todo item input box
    document.forms['todoinput'].reset();

    //return false to prevent form from reloading page
    return false;
}

//e variable is event
function rem(e) {

    // define event target is the checkbox
    var eventarget = e.target;

    //define parent element,in this case "LI"
    var parent = eventarget.parentElement;


    var itemnumber = e.target.id;

    //remove the parenet element from the array list items
    stuffOnYourBrowser.removeItem(itemnumber);

    //remove list item
    parent.parentNode.removeChild(parent);

    //Display total number of items in todo list
    itemsInList(stuffOnYourBrowser);
}


// Function counts and displays total number of tasks
function itemsInList(localstorage) {
    var totalitems = localstorage.length;
    alert(totalitems);
    document.getElementById("total").innerHTML = totalitems;
}


