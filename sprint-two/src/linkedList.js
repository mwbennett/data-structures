var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newnode = {value: value, next: null};

    if(list.tail){
      list.tail.next = newnode;
    }

    list.tail = newnode;

    if (!list.head){
      list.head = list.tail;
    }

  };

  list.removeHead = function(){
    var result = list.head;
    list.head = result.next;
    return result.value;
  };

  list.contains = function(target){
    var node = list.head;
    var bool = false;
    while(node && bool === false){
      if(node.value === target){
        bool = true;
      }
      node = node.next;
    }
    return bool;
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
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */
