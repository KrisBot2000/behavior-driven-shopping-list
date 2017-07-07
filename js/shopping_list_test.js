/* jshint esversion: 6 */

// const Person = require('../app.js');

var expect = chai.expect;
var should = chai.should();


describe('ShoppingListItem', function (){

  var newItem = new ShoppingListItem('pencil', 'something to write with');

  it('should be a class (function) ;) ', function (){
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a name property', function(){
    expect(newItem.name).to.equal('pencil');
  });

  it('name should be a string', function(){
    expect(newItem.name).to.be.a('string');
  });

  it('should have a description property', function (){
    expect(newItem.description).to.equal('something to write with');
  });

  it('should have an is_done property', function (){
    expect(newItem.is_done).to.equal(false);
  });

  it('should have a check method that once called by the instance, changes the instance\'s is_done property to true', function (){
    expect(newItem.check()).to.equal(true);
  });

  it('should have an uncheck method that once called by the instance, changes the instances\'s is_done property to false', function(){
      expect(newItem.uncheck()).to.equal(false);
  });

  it('should have a render method with a bunch of html stuff in a string', function (){

    newItem.uncheck();

    expect(newItem.render()).to.equal('<li class="completed_false"><span>pencil</span> <span>something to write with</span></li>');
  });

});



describe('ShoppingList', function (){

  var newList;

  beforeEach(function(){
    newList = new ShoppingList();
  })

  it('should be a class (function) ;) ', function (){
    expect(ShoppingList).to.be.a('function');
  });

  it('should have an "items" property', function(){
    expect(newList.items).to.deep.equal([]);
  });


  it('should throw an error if item is not a ShoppingListItem', function(){

    var item = new ShoppingListItem('pencil','#2');

    //expect(error)to.be('thrown');




  });



  it('should add new item to array of items', function(){

    var item = new ShoppingListItem('pencil','#2');

    newList.addItem(item);

    expect(newList.items[0]).to.be.deep.equal(item);
  });




});
