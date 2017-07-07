/* jshint esversion: 6 */

class ShoppingListItem {
  constructor (name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    if(this.is_done === false){
      this.is_done = true;
    }
    return this.is_done;
  }

  uncheck(){
    if(this.is_done === true){
      this.is_done = false;
    }
    return this.is_done;
  }

  render(){
    return "<li class=\"completed_"+ this.is_done + "\"><span>" + this.name + "</span> <span>" + this.description + "</span></li>";
  }
}