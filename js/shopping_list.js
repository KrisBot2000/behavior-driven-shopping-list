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

  removeItem(singleItem){
    if(singleItem instanceOf ShoppingListItem){
      if(this.items.length>0){
        if(singleItem===undefined){
          this.item.pop();
        }
        if(this.items.indexOf(singleItem) > -1){
          this.items.splice((this.items.indexOf(singleItem)),1);
        }
      }else{
        //do nothing.
      }
    }else{
      throw "Error: item is not a ShoppingListItem";
    }
  }



}

