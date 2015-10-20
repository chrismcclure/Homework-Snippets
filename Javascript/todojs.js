//One Array To Rule Them All!
//empty array to fill with the todo items
var arrayOfToDoItems = [];


//Function, upon Button Click Add User Item to Array of Todos
function addItemToDoToList(item) {

    //add item to array
    arrayOfToDoItems.push(item);

    //createinput checkbox and it's attributes
    var checkboxitem = document.createElement('input');
    checkboxitem.type = "checkbox";
    checkboxitem.id = "todoitem";
    checkboxitem.name = item;
    // took a while to figure out that I didn't need quotes or () to call function
    checkboxitem.onclick = rem;

    //create label for each checkbox
    var label = document.createElement('label');
    label.htmlfor = "todoitem";
    label.appendChild(document.createTextNode(item));

    //create list item
    var node = document.createElement("LI");

    //append both the checkbox and label to each list item
    node.appendChild(checkboxitem);
    node.appendChild(label);

    //append li to ul id="myList"
    document.getElementById("myList").appendChild(node);

    // Display total number of items in todo list
    itemsInList();

    //Clear the todo item input box
    document.forms['todoinput'].reset();

    //return false to prevent form from reloading page
    return false;
}

//e variable is event
function rem(e) {

    // create a string of item to be removed
    var itemToBeRemove = e.target.name;

    //find index number of item to be removed
    var indexnumber = arrayOfToDoItems.indexOf(itemToBeRemove);

    //remove the item from array of to do items
    arrayOfToDoItems.splice(indexnumber, 1);

    // define event target, and define list item
    var eventarget = e.target;

    //define parent element,in this case "LI"
    var parent = eventarget.parentElement;

    //remove list item
    parent.parentNode.removeChild(parent);

    // Display total number of items in todo list
    itemsInList();
}


// Function counts and displays total number of tasks
function itemsInList() {

    var totalitems = arrayOfToDoItems.length;
    document.getElementById("total").innerHTML = totalitems;
}
