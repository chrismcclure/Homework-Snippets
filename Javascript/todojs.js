
//empty array of all the todo items
//One Array To Rule Them All!
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
    var totalitems = arrayOfToDoItems.length;
    document.getElementById("total").innerHTML = totalitems;

    //Clear the todo item input box
    document.forms['todoinput'].reset();

    return false;
}

//e variable is event
function rem(e) {

    // create a string of itemn to be removes
    var itemToBeRemove = e.target.name;

    //what number the index number of the item is
    var a = arrayOfToDoItems.indexOf(itemToBeRemove);

    //remove the item from array of to do items
    arrayOfToDoItems.splice(a, 1);

    // define event target, and define list item
    var eventarget = e.target;
    var parent = eventarget.parentElement;

    //remove list item
    parent.parentNode.removeChild(parent);

    // Display total number of items in todo list
    var totalitems = arrayOfToDoItems.length;
    document.getElementById("total").innerHTML = totalitems;

}
