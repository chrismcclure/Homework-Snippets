//One Array To Rule Them All!
//empty array to fill with list items that contain the todo items
var arrayOfToDoItems = [];

//Function, upon Button Click Add User Item to Array of Todos
function addItemToDoToList(item) {

    //createinput checkbox and it's attributes
    var checkboxitem = document.createElement('input');
    checkboxitem.type = "checkbox";
    checkboxitem.name = item;
    checkboxitem.className = "todoitem";
    checkboxitem.data-index = ""

    // took a while to figure out that I didn't need quotes or () to call function
    checkboxitem.onclick = rem;

    //create label for each checkbox
    var label = document.createElement('label');
    label.htmlfor = "todoitem";
    label.appendChild(document.createTextNode(item));

    //create list item
    var node = document.createElement("LI");

    // add list items to array of list items
    arrayOfToDoItems.push(node);

    //append both the checkbox and label to each list item
    node.appendChild(checkboxitem);
    node.appendChild(label);

    //append li to ul id="myList"
    document.getElementById("myList").appendChild(node);

    // Display total number of items in todo list
    itemsInList(arrayOfToDoItems);

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

    //remove the parenet element from the array list items
    arrayOfToDoItems.splice(arrayOfToDoItems.indexOf(parent), 1);

    //remove list item
    parent.parentNode.removeChild(parent);

    //Display total number of items in todo list
    itemsInList(arrayOfToDoItems);
}


// Function counts and displays total number of tasks
function itemsInList(array) {
    var totalitems = array.length;
    document.getElementById("total").innerHTML = totalitems;
}


