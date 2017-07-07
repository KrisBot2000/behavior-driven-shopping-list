/* jshint esversion: 6 */

var title = document.createElement("h1");
title.innerHTML = "My Shopping List";

var contentDiv = document.getElementById("content");

contentDiv.appendChild(title);

var addButton = document.createElement("BUTTON");
var text = document.createTextNode("ADD ITEM");
addButton.appendChild(text);
contentDiv.appendChild(addButton);

var itemForm = document.createElement("FORM");
var formName = document.createTextNode("")


