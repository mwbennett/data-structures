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
  if(this.value && this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    console.log(this.value);
    var newnode = this.children[i];
    return newnode.contains(target);
  }

  return false;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// var tree1 = Tree(4);
// tree1.addChild(5);
// tree1.addChild(6);
// console.log("tree1: ", JSON.stringify(tree1));
// console.log(tree1.children[0]);

