//LENGHTY CODE:-

const addform = document.addfrm;
const addinput = addform.add;
const spninput = document.getElementById("inputcheck");
let ul = document.querySelector("ul");
let listitems = ul.querySelectorAll("li");
let todolist = [];
for (let item of listitems) {
  todolist.push(item.firstElementChild.innerText);
}
let emptycheck = document.createElement("span");

let addlistitem = function (text) {
  let newlist = document.createElement("li");
  let spanoflist = document.createElement("span");
  let ioflist = document.createElement("i");
  newlist.appendChild(spanoflist);
  newlist.appendChild(ioflist);
  spanoflist.append(text);
  ul.appendChild(newlist);
  newlist.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );
  ioflist.setAttribute("class", "far fa-trash-alt delete");
  todolist.push(addinput.value);
  ioflist.addEventListener("click", () => {
    todolist.pop();
    newlist.remove();
  });
};
addinput.addEventListener("keypress", (e) => {
  spninput.innerText = "";
  if (e.key == "Enter") {
    const newtodo = addinput.value;
    e.preventDefault();
    if (newtodo.length == 0) {
      spninput.innerText = "This field cannot be empty";
      spninput.style.color = "crimson";
    } else {
      spninput.innerText = "";
      addlistitem(newtodo);
      addinput.value = "";
    }
    emptycheck.innerText = "";
  }
});
let listitem = ul.querySelectorAll("li");
listitem.forEach((item) => {
  let deli = item.querySelector("i");
  deli.addEventListener("click", () => {
    todolist.pop();
    item.remove();
  });
});

const searchform = document.searchform;
const searchinput = searchform.search;
searchinput.addEventListener("click", (e) => {
  if (ul.childElementCount == 0) {
    emptycheck.innerText = "There are no task left to search";
    emptycheck.style.color = "crimson";
    ul.appendChild(emptycheck);
    e.preventDefault();
  } else {
    emptycheck.remove();
  }
});
let inputsearch = "";
searchinput.addEventListener("keydown", (e) => {
  ul.innerHTML = "";
  if (e.keyCode >= 50 && e.keyCode <= 90) {
    inputsearch = searchinput.value + e.key;
  } else if (e.keyCode == 8) {
    inputsearch = searchinput.value.slice(0, -1);
  } else if (e.keyCode != 32) {
    e.preventDefault();
  }
  todolist.forEach((item) => {
    if (item.trim().toUpperCase().includes(inputsearch.trim().toUpperCase())) {
      addlistitem(item);
    }
  });
  todolist = todolist.filter((item) => item);
});

//Short code
// let addFrm = document.addfrm;
// let text = addFrm.add;
// let ul = document.querySelector(".todos");
// let addItem = (item) => {
//   let str = `<li class="list-group-item d-flex justify-content-between align-items-center">
//     <span>${item}</span>
//     <i class="far fa-trash-alt delete"></i>
// </li>`;
//   ul.innerHTML += str;
// };

// addFrm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let item = text.value;
//   if (item.length > 0) {
//     addItem(item);
//     text.value = "";
//   }
// });

// ul.addEventListener("click", (e) => {
//   if (e.target.nodeName === "I") {
//     e.target.parentElement.remove();
//   }
// });
// let searchItem = (text) => {
//   let listItems = ul.children;
//   for (let li of listItems) {
//     if (li.innerText.toLowerCase().indexOf(text) == -1)
//       li.classList.add("filtered");
//     else li.classList.remove("filtered");
//   }
// };

// let searchText = document.querySelector(".search input");
// searchText.addEventListener("keyup", (e) => {
//   searchItem(searchText.value.toLowerCase());
// });
