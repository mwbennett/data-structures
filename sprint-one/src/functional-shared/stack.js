var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    storageSize : 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {

  push: function(value){
    this.storage[this.storageSize] = value;
    this.storageSize++;

  },

  pop: function(){
    var result;
    if(this.storageSize > 0){
      result = this.storage[this.storageSize - 1];
      delete this.storage[this.storageSize - 1];

      this.storageSize--;
    }
    return result;
  },

  size: function(){
    return this.storageSize;
  }

};

