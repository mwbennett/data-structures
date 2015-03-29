var BinarySearchTree = function(value){
  var binaryTree = Object.create(BinarySearchTree.prototype);

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

BinarySearchTree.prototype.insert = function(value){
  var newNode = BinarySearchTree(value);

  var positionNode = function(node, tree){
    if (node.value < tree.value){
      if (tree.left){
        return positionNode(node, tree.left);
      }
      tree.left = node;
    }
    if (node.value > tree.value){
      if (tree.right){
        return positionNode(node, tree.right);
      }
      tree.right = node;
    }
  };

  positionNode(newNode, this);
};

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value){
    return true;
  }
  if (value < this.value && this.left){
    return this.left.contains(value);
  }
  if (value > this.value && this.right){
    return this.right.contains(value);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(func){
  func(this.value);
  if (this.left){
    this.left.depthFirstLog(func);
  }
  if (this.right){
    this.right.depthFirstLog(func);
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
