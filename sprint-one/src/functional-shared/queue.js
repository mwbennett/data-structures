var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    beginning: 0,
    end: 0,
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {

  enqueue: function(value){
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue: function(){
    var result;
    if((this.end - this.beginning) > 0){
      result = this.storage[this.beginning];
      delete this.storage[this.beginning];
      this.beginning++;
    }
    return result;
  },

  size: function(){
    return this.end - this.beginning;
  }

}

