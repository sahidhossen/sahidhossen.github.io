
function Physics(x, y){
	this.pos = createVector(random(width), random(height));
	this.target = createVector(x, y); 
	this.vel = p5.Vector.random2D();
	this.acc = createVector(); 
	this.r = 8; 
	this.maxspeed = 10; 
	this.maxforce = 1;
}

Physics.prototype.behaviors = function(){
	var arrive = this.arrive(this.target); 

	var mouse = createVector(mouseX, mouseY); 
	var flee = this.flee(mouse); 

	arrive.mult(1); 
	flee.mult(5);

	this.applyForce(arrive); 
	this.applyForce(flee);
}

Physics.prototype.applyForce = function(f){
	this.acc.add(f);
}

Physics.prototype.update = function(){
	this.pos.add(this.vel); 
	this.vel.add(this.acc);
	this.acc.mult(0); 
}

Physics.prototype.show = function(randomColor){     
	stroke(randomColor);
	strokeWeight(8);
	point(this.pos.x, this.pos.y);
}

Physics.prototype.arrive = function(target){
	var desired = p5.Vector.sub(target,this.pos);
	var d = desired.mag(); 
	var speed = this.maxspeed;
	if( d < 100 ){
		speed = map(d, 0, 100, 0, this.maxspeed); 
	} 
	desired.setMag(speed);
	var gvforce = p5.Vector.sub( desired, this.vel); 
	gvforce.limit(this.maxforce);
	return gvforce;
}


Physics.prototype.flee = function(target){
	var desired = p5.Vector.sub(target,this.pos); 
	var d = desired.mag(); 
	if( d < 80 ){
		desired.setMag(this.maxspeed);
		desired.mult(-2);
		var gvforce = p5.Vector.sub( desired, this.vel); 
		gvforce.limit(this.maxforce);
		return gvforce;
	}else {
		return createVector(0,0);
	}
	
}

Physics.prototype.seek = function(target){
	var desired = p5.Vector.sub(target,this.pos); 
	desired.setMag(this.maxspeed);
	var gvforce = p5.Vector.sub( desired, this.vel); 
	gvforce.limit(this.maxforce);
	return gvforce;
}