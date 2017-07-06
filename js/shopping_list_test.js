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

});