/* jshint esversion: 6 */

class ShoppingList {
  constructor (){
    this.items = [];

  }

  addItem(singleItem){
    if(singleItem instanceof ShoppingListItem !== true){
          console.log('this item is not a ShoppingListItem');
          throw new Error('item is not a ShoppingListItem.');
    } else {
      this.items.unshift(singleItem);
    }
  }

  removeItem(singleItem){
    // if(singleItem instanceof ShoppingListItem){
      // if(this.items.length>0){
    if (this.items.indexOf(singleItem) > -1){
      this.items.splice((this.items.indexOf(singleItem)),1);
    } else {
      if (singleItem === undefined){
        this.items.shift();
      } else {
        throw new Error ('item is not in the ShoppingList');
      }
    }
  }



}

