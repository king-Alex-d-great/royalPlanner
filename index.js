//grab li, ul

// function to directly add a list item to our list
function addListItem (newitem){
let li = document.createElement("li");
li.appendChild(document.createTextNode(newitem));
document.querySelector("ul").appendChild(li)


