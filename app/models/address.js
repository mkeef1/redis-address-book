'use strict';

function Address(o, id){
  this.name    = o.name;
  this.color   = o.color;
  this.twitter = o.twitter;
  this.userId  = id;
}

Object.defineProperty(Address, 'collection', {
  get: function(){return global.mongodb.collection('addresses');}
});

Address.create = function(o, id, cb){
  var a = new Address(o, id);
  Address.collection.save(a, cb);
};

Address.findAllByUserId = function(userId, cb){
  Address.collection.find({userId:userId}).toArray(cb);
};

module.exports = Address;
