function Node(val, x, y ){
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}

Node.prototype.addNode = function(n){
  if( n.value < this.value ){
    if(this.left == null ){
      this.left = n;
      this.left.x = this.x - 80;
      this.left.y = this.y + 20;
    }else {
      this.left.addNode(n);
    }
  }else if(n.value > this.value ) {
    if(this.right == null ){
      this.right = n;
      this.right.x = this.x + 70;
      this.right.y = this.y + 20;
    }else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.visit = function(parent){
  if(this.left != null ){
    this.left.visit(this);
  }
  console.log(this.value)
  fill(255, 204, 0);
  ellipse(this.x, this.y, 20, 20);
  stroke(255, 204, 0);
  line(parent.x, parent.y, this.x, this.y);
  fill(0);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y+3);

  if(this.right != null ){
    this.right.visit(this);
  }
}


Node.prototype.search = function(val){
  if(val == this.value ){
    return this;
  }else if( val < this.value && this.left != null ){
    return this.left.search(val);
  }else if(val > this.value && this.right != null ){
    return this.right.search(val);
  }
  return null;
}
