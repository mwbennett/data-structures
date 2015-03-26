var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    list.tail = {value: value, next: null};
    if (!list.head){
      list.head = list.tail;
    }

  };

  list.removeHead = function(){
    var result = list.head;
    list.head = result.next;
    debugger;
    return result.value;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
