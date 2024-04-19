window.onload = () => {
  var lastRemovedListItem = null;
  let lastRemovedListItemPosition = -1;
  const list = document.getElementById("list");
  let wasLastButtonCtrl = false;

  for (let index = 0; index < 10; index++) {
    const listItemToAdd = document.createElement("li");
    listItemToAdd.innerText = `dad ias diua sdaisd ia sd awiuiwa id la  dw dluawk duialw dkaui id lakw d kau dwkka dkwadi fiuwaf aiu fiua efiu iw f awif i awkj dfkwajf kjwa k ed wak dakwlf dkja fkw fiawf uwa fjdaksf kljaw fdkwa fkajw fdkj f ja ${index}`;
    listItemToAdd.addEventListener("click", () => {
      ChangeListItemToggle(listItemToAdd);
    });
    AddRemoveButtonToListItem(listItemToAdd);

    list.insertBefore(listItemToAdd, list.childNodes[0]);
  }
};

const ReturnItem = () => {
  if (lastRemovedListItemPosition !== -1) {
    ChangeListItemToggle(lastRemovedListItem);
    list.insertBefore(
      lastRemovedListItem,
      list.childNodes[lastRemovedListItemPosition]
    );
    lastRemovedListItemPosition = -1;
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
    lastRemovedListItem = listItem;
    lastRemovedListItemPosition = Array.prototype.indexOf.call(
      list.children,
      listItem
    );
    list.removeChild(listItem);
    const returnButton = document.getElementById("return-button");
    returnButton.className = "return-button-enable";
  });
  var txt = document.createTextNode("\u00D7");
  button.className = "close-list-item";
  button.appendChild(txt);
  listItem.appendChild(button);
};
