var font; 
var physics = []; 
function preload(){
	font = loadFont("AvenirNextLTPro-Demi.otf"); 	
}
function pickColor(){
	var colors = ["#ff6868","#fc4e4e","#f71b1b","#f7ce1b","#c0f71b","#f71ba6","#1b64f7"];                
  	return colors[Math.floor(Math.random()*colors.length)];
}
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(51);
	var points = font.textToPoints('SABAH', windowWidth/6, windowHeight/2, 192); 
	for(var i=0; i<points.length; i++ ){
		var pt = points[i]
		var physic = new Physics(pt.x, pt.y);
		physics.push( physic );
	}
}

function draw(){
	//Draw code here
	background(10);
	for( var i = 0; i<physics.length; i++ ){
		var v = physics[i];
		v.behaviors();
		v.update();
		v.show(pickColor());
	}
}
