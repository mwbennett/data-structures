var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  if (!bucket){
    bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;
  _.each(bucket, function(tuple, key){
    if (tuple[0] === k){
      tuple[1] = v;
      found = true;
    }
  });

  if (!found){
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket){
    return null;
  }

  for (var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if (tuple[0] === k){
      return tuple[1];
    }   
  };

  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket){
    return null;
  }

  _.each(bucket, function(tuple, key){
    if (tuple[0] === k){
      bucket.splice(key, 1);
      return tuple[1];
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */

