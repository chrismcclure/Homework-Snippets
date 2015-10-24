//Homework for the weekend.
//Bug:  when I make my array empty then refresh page, the array is populated by one "" item
//- Add dates

//Get's cookie and slices to just the listname
//If I change my cookie string later this will need to change
var listName = document.cookie.slice(9);

// local Storage of all the user objects
var stuffOnYourBrowser = localStorage;


//Array of all the items in storage form the correct list name
var toDoItems = stuffOnYourBrowser.getItem(listName).split(",");


//Used to determine what list is to be used
//This is used on the select user page and holds value of list name
function createCookie(username){
document.cookie ="ListName =" + username;
}


//constructor to create name and list object
//This is only used on the User Select Page
function PersonalizedList(listname){
        this.listname = listname;
        //Array of tasks that will have all the pending todo items
        this.todoTasks = ["Add More To Do Items", "Do a backflip"];
};

//make an new instance of list called user.
//What to I need to do to pass my user object around?
function makeNewUserObject(name){
    createCookie(name);
    var user =  new PersonalizedList(name);
    stuffOnYourBrowser.setItem(user.listname, user.todoTasks);
    window.location.assign("todo.html");
}


//All the functions to be called when the To Do List loads to populate numbers on page with local storage data
function OnLoad(){

    //Calls function to personalize the page
    addUserNameToHTML(listName, "userName");

    //Pull items from storage and creats the initial list of tasks
    makeFirstList();

    //Count number of tasks to be done
    itemsInList();

    //This is BROKEN
    document.getElementById("totaldone").innerHTML = "<br>Not Currently Working :(";
}

//This function will change inner html of all elements with this class name
function addUserNameToHTML(newHTML, className){

    // creates an array of all the elements that have that class name
    var useOfClassName = document.getElementsByClassName(className);

    //loop to go through all the elements in the list
    for(var i = 0; i < useOfClassName.length; i++){

        //change the inner HTML to the new text
        useOfClassName[i].innerHTML = newHTML;
    }
}

//Upon load I need to have a funtion that display all the items in local storage
//for each value in local storage, append to my myList
function makeFirstList(){
    //foreach loop to go throught my array of to items
    for(var k in toDoItems){
        //if null upon the loading of the page this should appear
        if (k == null){
        document.getElementById('additem').innerHTML = "Please Add An Item";
            } else{
           addItemToDoToList(toDoItems[k]);
        }
    }
}


function addToListOnClick(item){
        //TODO ***** Make Function To Check For Name and if name is eqaul to value in array, then tell user to get a life and be more specific

        //Add item to array
        toDoItems.push(item);

        //update local storage
        stuffOnYourBrowser[listName] = toDoItems;

        //Make new element
        addItemToDoToList(item);

    return false;
}



//Function that Add Tasks to the list by creating elements and jamming them in ul
function addItemToDoToList(item) {

    //createinput checkbox and it's attributes
    var checkboxitem = document.createElement('input');
    checkboxitem.type = "checkbox";
    checkboxitem.name = item;
    checkboxitem.className = "todoitem";

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

//Remove Tasks
function rem(e) {


    // define event target is the checkbox
    var eventarget = e.target;

    //define parent element,in this case "LI"
    var parent = eventarget.parentElement;

    //remove list item
    parent.parentNode.removeChild(parent);

    //Define the name of the item to be removed from array
    var itemname = e.target.name;

    //Index item to remove from array
    var indexNumer = toDoItems.indexOf(itemname);

    //Remove item from array of tasks
    toDoItems.splice(indexNumer, 1);

    //Update local storage
    stuffOnYourBrowser[listName] = toDoItems;

    //Display total number of items in todo list
    itemsInList();

}


// Function counts and displays total number of tasks that still need to be completed
function itemsInList() {
    var totalitems = toDoItems.length;
    document.getElementById("total").innerHTML = totalitems;
}


