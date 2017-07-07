/* jshint esversion: 6 */

class ShoppingList {
  constructor (){
    this.items = [];

  }

  addItem(singleItem){
    if(singleItem instanceOf ShoppingListItem !== true){
          throw "Error: item is not a ShoppingListItem.";
    }else{
      this.items.unshift(singleItem);
    }
  }
}