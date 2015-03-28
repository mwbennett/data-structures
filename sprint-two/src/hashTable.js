var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){
    this._storage.get(i).push([k,v]);
  } else {
    this._storage.set(i, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[1];
};

HashTable.prototype.remove = function(k){
  var targetIndex = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(array){
    array.each(function(val, key){
      if (val === k){
        array.splice(key, 2);`
      }
    });
  });
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
