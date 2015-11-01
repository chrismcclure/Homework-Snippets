window.onload = loaded;
var clicky =  document.getElementById("clicky");

function loaded(){
  var textbox = document.getElementById('user-text');
    //This is a chance to check what the use is going
  textbox.oninput = getUserText;

    clicky.onclick = function() {
    alert('hello');
  };

}

function getUserText(){
    var text = this.value
    document.getElementById('typed').innerText = text;
    if(text.length > 10){
        clicky.disabled = false;
    }else{
         clicky.disabled = true;
    }

    if
    document.getElementById("number").innerText = text.length;

    if(text.length > 50){
        document.getElementById("number").innerText = text.length.fontcolor('green');
    }
}
