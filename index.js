//grab li, ul, button

// function to directly add a list item to our list
function addListItem(newitem) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newitem));
  document.querySelector("ul").appendChild(li);
}

/*
TESTRUN : onClick function that directly adds a list item to our list

function handleButton (newItem) {
document.querySelector("button").addEventListener("click", function (){
let li = document.createElement("li");
li.appendChild(document.createTextNode(newItem));
document.querySelector("ul").appendChild(li)
})
}
*/

//MAKE THE BUTTON ADD THE VALUE OF THE INPUT FIELD TO THE TODO LIST

let input = document.querySelector("input");
/*iteration one
li.appendChild(input.getAttribute("value")));
its worthy of note that this did not work, because??
but this worked:
li.appendChild(input.getAttribute("value")));

*/

function handleButton() {
  //Do not put a conditional statement before an event listener, because??
  if (input.value.length > 0) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    document.querySelector("ul").appendChild(li);
    input.value = "";
  }
}
document.querySelector("button").addEventListener("click", handleButton);

//MAKE THE ENTER BUTTON ADD A LIST ITEM
