

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var newNode = {}
  newNode.value = node;
  newNode.edges = [];

  this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === node){
      this.nodes.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === fromNode){
      if(_.indexOf(this.nodes[i].edges, toNode)  !== -1){
        return true;
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === fromNode){
      this.nodes[i].edges.push(toNode);
    }
  }

  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === toNode){
      this.nodes[i].edges.push(fromNode);
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodes.length; i++){

    if(this.nodes[i].value === fromNode){
      var index = _.indexOf(this.nodes[i].edges, fromNode);
      this.nodes[i].edges.splice(index, 1);
    }
    else if (this.nodes[i].value === toNode){
      var index = _.indexOf(this.nodes[i].edges, toNode);
      this.nodes[i].edges.splice(index, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(val, index){
    cb(val.value);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



