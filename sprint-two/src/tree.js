var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var tree1 = Tree(1);
tree1.addChild(2);
tree1.addChild(3);
tree1.children[0].addChild(4);
tree1.children[0].addChild(5);
tree1.children[0].addChild(6);
console.log("tree1: ", JSON.stringify(tree1));
console.log(tree1.contains(2));
console.log(tree1.contains(3));
console.log(tree1.contains(4));
console.log(tree1.contains(5));
console.log(tree1.contains(6));
