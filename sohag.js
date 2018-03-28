var font; 
var physics = []; 
var clr = 255;
function preload(){
	font = loadFont("AvenirNextLTPro-Demi.otf"); 	
}

function setup(){
	//setup code 
	
	createCanvas(windowWidth,windowHeight);
	background(51)
	var points = font.textToPoints('SOHAG', windowWidth/4-150, windowHeight/2, 192); 
	for(var i=0; i<points.length; i++ ){
		var pt = points[i]
		var physic = new Physics(pt.x, pt.y);
		physics.push( physic );
	}
}

function draw(){
	//Draw code here
	background(51); 
	for( var i = 0; i<physics.length; i++ ){
		var v = physics[i];
		v.behaviors();
		v.update();
		v.show(255);
		
	}
}
