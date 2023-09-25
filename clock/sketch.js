function setup(){
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES)
}

function draw(){
	background(0);
	translate(200,200);
	rotate(-90);

	let hr = hour(); 
	let mn = minute();
	let sec = second(); 

	strokeWeight(4);
	stroke(255,100,160);
	noFill();
	let secondAngle = map(sec, 0, 60, 0, 360);
	arc(0,0, 300, 300, 0, secondAngle);


	stroke(150,100,255);
	let minuteAngle = map(mn, 0, 60, 0, 360);
	arc(0,0, 280, 280, 0, minuteAngle);

	stroke(150,255,100);
	let hourAngle = map(hr % 12, 0, 12, 0, 360);
	arc(0,0, 260, 260, 0, hourAngle);

	push();
	rotate(secondAngle);
	stroke(255,100,160);
	strokeWeight(10);
	line(0,0,100,0)
	pop(); 

	push();
	rotate(minuteAngle);
	stroke(150,100,255);
	line(0,0,75,0)
	pop();

	push();
	rotate(hourAngle);
	stroke(150,255,100);
	line(0,0,50,0)
	pop();

	stroke(255); 
	point(0,0);
}