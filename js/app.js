/* jshint esversion: 6 */

var myList = new ShoppingList();

var title = document.createElement("h1");
title.innerHTML = "My Shopping List";

var contentDiv = document.getElementById("content");

contentDiv.appendChild(title);

var form = document.createElement("form");

var itemLabel = document.createElement('label');
itemLabel.innerHTML = 'Item';
var itemInput = document.createElement('input');
itemInput.type = 'text';

var descripLabel = document.createElement('label');
descripLabel.innerHTML = 'Description';
var descripInput = document.createElement('input');
descripInput.type = 'text';


contentDiv.appendChild(form);
form.appendChild(itemLabel);
form.appendChild(itemInput);
form.appendChild(descripLabel);
form.appendChild(descripInput);

var addButton = document.createElement("button");
var text = document.createTextNode("ADD ITEM");
addButton.appendChild(text);
contentDiv.appendChild(addButton);

addButton.addEventListener('click', add_to_shopping_list);

listDiv = document.createElement('div');
listDiv.id = 'List_Container';
contentDiv.appendChild(listDiv);

function add_to_shopping_list(itemName, description){
  if (itemInput.value !== null && itemInput.value !== undefined && itemInput.value !== ''){
    var newItem = new ShoppingListItem(itemInput.value, descripInput.value);
    myList.addItem(newItem);
    var rowDiv = document.createElement('div');
    listDiv.appendChild(rowDiv);
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    rowDiv.appendChild(checkbox);
    newLi = document.createElement('li');
    rowDiv.appendChild(newLi);

  }
  itemInput.value = '';
  descriptInput.value = '';
}



