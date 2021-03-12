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

let input = document.querySelector("input");
/*iteration one
li.appendChild(input.getAttribute("value")));
its worthy of note that this did not work, because??
but this worked:
li.appendChild(input.getAttribute("value")));

*/

// function createButton(name) {
//   let button = document.createElement("button")
// button.setAttribute("class", "listbuttons")
// //use a class instead, the button clas

//   button.innerHTML = name;
//   return button;
// }
class Button {
  constructor(name, id, classname, _event) {
    (this.name = name), (this.id = id);
    this.classname = classname;
    this.onclick = onclick;
  }
  createButton() {
    const button = document.createElement("button");
    button.innerHTML = this.name;
    return button;
  }
}

let editButton = new Button("edit", "", "", "");
let deleteButton = new Button("delete", "alk", "", "");

let newEdit = editButton.createButton();
let newDelete = deleteButton.createButton();

function showListItem() {
  let li = document.createElement("li");
  li.append(document.createTextNode(input.value), newEdit, newDelete);
  document.querySelector("ul").append(li);
  input.value = "";
  input.focus();
}

//edit function
newEdit.addEventListener("click", function () {
  console.log("chiwendu get up");
});

//delete function
newDelete.addEventListener("click", function () {
  console.log("i can do all things");
});

//MAKE THE BUTTON ADD THE VALUE OF THE INPUT FIELD TO THE TODO LIST
function handleButton() {
  if (input.value.length > 0) {
    showListItem();
  }
}

document.querySelector("button").addEventListener("click", handleButton());

//MAKE THE ENTER BUTTON ON THE KEYBOARD ADD A LIST ITEM
input.addEventListener("keypress", function (event) {
  // to use the keycode function you must pass event as a parameter to the function
  if (input.value.length > 0 && event.keyCode === 13) {
    showListItem();
  }
});

handleButton();
