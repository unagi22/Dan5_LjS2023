let list = document.getElementById("items-list");
let form = document.getElementsByTagName("form")[0];
let items = list.getElementsByClassName("btn-delete");

function addItem(event) {
  event.preventDefault();
  let inputText = document.getElementById("input-text").value;
  if (!!inputText) {
    document.getElementById("items-list").innerHTML +=
      "<li class='item'>" +
      inputText +
      "<button class='btn btn-delete'>X</button></li>";
  }
}

document.querySelector("input[type=submit]").addEventListener("click", addItem);

let deleteButtons = document.querySelectorAll(".btn-delete");
for (let btn of deleteButtons) {
  btn.addEventListener("click", function deleteItem() {
    btn.parentElement.remove();
  });
}
