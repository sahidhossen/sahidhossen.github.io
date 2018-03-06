var tree;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(51);
  tree = new Tree();
  for( var i = 1; i<100; i++ ){
    tree.addValue(floor(random(0, 100 )));
  }
  console.log( tree );
  tree.treverse();

  var result = tree.search(10);

  if( result == null ){
    console.log("Not Found! ");
  }else {
    console.log(result);
  }

}
