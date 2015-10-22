
// local Storage of all the tasks that are added and deleted when completed
var stuffOnYourBrowser = localStorage;
var index = stuffOnYourBrowser.length;
//This will hold the element to be dome
var todoTasks = ["Add A To Do Items"];
//Array of arrays, this will be stored as the value in the local storage

// User name
var userName;
user = {};
//Object to put it all together





function PersonalizedList(listname){
        this.listname = listname;
        //Array of tasks that will have all the pending todo items
        this.todoTasks = ["Add A To Do Items", "Do a backflip"];
};


function makeNewUserObject(name){
    user =  new PersonalizedList(name);
    stuffOnYourBrowser.setItem(user.listname, user.todoTasks);
//    alert("The list name is: " + user.listname + " and the first task is: " + user.todoTasks[0]);
    window.location.assign("todo.html");
    return
}


//All the functions to be called when the pages loads to popular numbers on page with local storage data
function OnLoad(){
    itemsInList();
    loodStoredTasks();
    document.getElementById("Username").innerHTML = "Juan";
    document.getElementById("totaldone").innerHTML = "<br>Not Currently Working :(";

}


function jamUserNameInHTML(){
    document.getElementsByClassName('Username').innerHTML = user.listname;
};

//Upon load I need to have a funtion that display all the items in local storage
//for each value in local storage, append to my myList
function loodStoredTasks(){
    for(var k in stuffOnYourBrowser){
        if (k == null){
        break;} else{
           recreateElement(k, stuffOnYourBrowser[k]);
        }
    }
}



//Function Add Tasks to the list by creating elements and jamming them in ul
function addItemToDoToList(item) {
    //Increment index = id
    index++;

    //createinput checkbox and it's attributes
    var checkboxitem = document.createElement('input');
    checkboxitem.type = "checkbox";
    checkboxitem.name = item;
    checkboxitem.className = "todoitem";
    checkboxitem.id = index;
    //checkboxitem.dataset.index = index;

    // took a while to figure out that I didn't need quotes or () to call function
    checkboxitem.onclick = rem;

    //create label for each checkbox
    var label = document.createElement('label');
    label.htmlfor = "todoitem";
    label.appendChild(document.createTextNode(item));

    //create list item
    var node = document.createElement("LI");

    var topnumnbers = Object.keys(stuffOnYourBrowser);
    var arrayofnumber = [];
    for(var x in topnumnbers){
        arrayofnumber.push(Number(x));
    }
    var topnumber = Math.max(arrayofnumber);
    alert(topnumber);

    // add list items to local storage
    stuffOnYourBrowser.setItem(index, item);

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

//Remove Tasks
function rem(e) {


    // define event target is the checkbox
    var eventarget = e.target;

    //define parent element,in this case "LI"
    var parent = eventarget.parentElement;

    //The itemnumber is the key from local storage
    var itemnumber = e.target.id;
    alert(itemnumber);

    //remove the parenet element from the array list items
    stuffOnYourBrowser.removeItem(itemnumber);

    //remove list item
    parent.parentNode.removeChild(parent);

    //Display total number of items in todo list
    itemsInList();

}


// Function counts and displays total number of tasks that still need to be completed
function itemsInList() {
    var totalitems = stuffOnYourBrowser.length;
    document.getElementById("total").innerHTML = totalitems;
}











//There must be a better way, this is double the work :(
//Recreate an element from the stored local data
function recreateElement(key, value){

    //Make checkbox
    var checkboxitem = document.createElement('input');
    checkboxitem.type = "checkbox";
    checkboxitem.name = value;
    checkboxitem.className = "todoitem";
    checkboxitem.id = key;
    checkboxitem.onclick = rem;

    //create label for each checkbox
    var label = document.createElement('label');
    label.htmlfor = "todoitem";
    label.appendChild(document.createTextNode(value));

    //create list item
    var node = document.createElement("LI");

    //append checkbox and label
    node.appendChild(checkboxitem);
    node.appendChild(label);

    //append li to ul id="myList"
    document.getElementById("myList").appendChild(node);

}

