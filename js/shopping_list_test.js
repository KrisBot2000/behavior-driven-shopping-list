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

});