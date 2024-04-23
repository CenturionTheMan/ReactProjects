var listItemToRemove = null;
var lastRemovedListItem = null;
const list = document.getElementById("list");

window.onload = () => {
  const delModal = document.getElementById("delete-modal");

  for (let index = 0; index < 10; index++) {
    const listItemToAdd = document.createElement("li");
    listItemToAdd.innerText = CreateRandomText(50, 300);
    listItemToAdd.addEventListener("click", () => {
      ChangeListItemToggle(listItemToAdd);
    });
    AddRemoveButtonToListItem(listItemToAdd);
    list.insertBefore(listItemToAdd, list.childNodes[0]);
  }

  const closingYesButton = document.getElementById("modal-yes-button");
  closingYesButton.addEventListener("click", () => {
    lastRemovedListItem = listItemToRemove;
    list.removeChild(listItemToRemove);
    const returnButton = document.getElementById("return-button");
    returnButton.className = "return-button-enable";
    delModal.close();
  });

  const closingNoButton = document.getElementById("modal-no-button");
  closingNoButton.addEventListener("click", () => {
    delModal.close();
  });
};

function CreateRandomText(min, max) {
  length = Math.random() * (max - min) + min;
  let result = "";
  const characters =
    "ABCD EFGHI JKLMNOP QRS TUVWXYZab cdefg hijklmnopq rstuvwx yz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const ReturnItem = () => {
  if (lastRemovedListItem != null) {
    list.insertBefore(lastRemovedListItem, list.childNodes[0]);
    lastRemovedListItem = null;
    const returnButton = document.getElementById("return-button");
    returnButton.className = "return-button-disable";
  }
};

const AddNewListItem = () => {
  console.log("AddNewListItem");
  const input = document.getElementById("inputField");
  if (input.value === "") {
    alert("Input is empty");
  } else {
    const listItemToAdd = document.createElement("li");
    listItemToAdd.innerText = input.value;

    listItemToAdd.addEventListener("click", () => {
      ChangeListItemToggle(listItemToAdd);
    });
    AddRemoveButtonToListItem(listItemToAdd);

    list.insertBefore(listItemToAdd, list.childNodes[0]);
    input.value = "";
  }
};

const ChangeListItemToggle = (listItem) => {
  if (listItem.classList.contains("checked")) {
    listItem.classList.remove("checked");
    listItem.removeChild(listItem.lastChild);
  } else {
    listItem.classList.toggle("checked");
    const currentDate = new Date();
    var p = document.createElement("p");
    p.className = "date-list-item";
    p.innerText = currentDate.toLocaleString();
    listItem.appendChild(p);
  }
};

const AddRemoveButtonToListItem = (listItem) => {
  var button = document.createElement("BUTTON");
  button.addEventListener("click", () => {
    listItemToRemove = listItem;
    ChangeListItemToggle(listItem);
    const modalText = document.getElementById("modal-text");
    console.log(listItem);
    modalText.innerText = `${listItem.innerText.split("×")[0]}`;

    const delModal = document.getElementById("delete-modal");
    delModal.showModal();
  });
  var txt = document.createTextNode("\u00D7");
  button.className = "close-list-item";
  button.appendChild(txt);
  listItem.appendChild(button);
};
