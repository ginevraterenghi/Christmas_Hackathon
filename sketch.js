var sfondi = ['#961f21', '#d06c52', '#7a9970', '#344f2b'];
var index = 0;
var albero;
var stella;

function preload() {
	albero = loadImage("./assets/albero.png");
	stella = loadImage("./assets/stella.png");
}


function setup() {

	createCanvas(windowWidth, windowHeight);

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {

	var volume = mic.getLevel();

	background(sfondi[index]);

	push();
	translate(windowWidth / 2, windowHeight / 6);
	image(albero, 0, 0, windowWidth / 2.5, windowHeight / 1.5);
	pop();

	push();
	translate(windowWidth / 1.49, windowHeight / 7);
	image(stella, 0, 0, windowWidth / 16, windowHeight / 14);
	pop();

	push();

	var minSize = width / 100;
	var maxSize = width / 20;
	var size = map(volume, 0, 1, minSize, maxSize);

	translate(windowWidth / 3, windowHeight / 6);

	if (volume >= 0.07) {
		noStroke();
		fill('#ffed08');
		ellipse(windowWidth / 2, windowHeight / 2, size);
		ellipse(windowWidth / 2.3, windowHeight / 2.3, size);
		ellipse(windowWidth / 2.5, windowHeight / 2.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 2.2, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.30, size);
		ellipse(windowWidth / 3, windowHeight / 3, size);
		ellipse(windowWidth / 3.3, windowHeight / 3.3, size);
		ellipse(windowWidth / 3.3, windowHeight / 1.7, size);
		ellipse(windowWidth / 3.7, windowHeight / 2, size);
		ellipse(windowWidth / 4, windowHeight / 2.4, size);
		ellipse(windowWidth / 3, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 5, size);
		ellipse(windowWidth / 3, windowHeight / 4.9, size);
		ellipse(windowWidth / 5, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 7.5, size);
		ellipse(windowWidth / 3, windowHeight / 7.5, size);
		ellipse(windowWidth / 2.4, windowHeight / 3.6, size);
		ellipse(windowWidth / 2.8, windowHeight / 7, size);
		ellipse(windowWidth / 1.9, windowHeight / 1.7, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 1.8, size);
	} else if (volume >= 0.05) {
		noStroke();
		fill('#d06c52');
		ellipse(windowWidth / 2, windowHeight / 2, size);
		ellipse(windowWidth / 2.3, windowHeight / 2.3, size);
		ellipse(windowWidth / 2.5, windowHeight / 2.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 2.2, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.30, size);
		ellipse(windowWidth / 3, windowHeight / 3, size);
		ellipse(windowWidth / 3.3, windowHeight / 3.3, size);
		ellipse(windowWidth / 3.3, windowHeight / 1.7, size);
		ellipse(windowWidth / 3.7, windowHeight / 2, size);
		ellipse(windowWidth / 4, windowHeight / 2.4, size);
		ellipse(windowWidth / 3, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 5, size);
		ellipse(windowWidth / 3, windowHeight / 4.9, size);
		ellipse(windowWidth / 5, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 7.5, size);
		ellipse(windowWidth / 3, windowHeight / 7.5, size);
		ellipse(windowWidth / 2.4, windowHeight / 3.6, size);
		ellipse(windowWidth / 2.8, windowHeight / 7, size);
		ellipse(windowWidth / 1.9, windowHeight / 1.7, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 1.8, size);
	} else if (volume >= 0.03) {
		noStroke();
		fill('#961f21');
		ellipse(windowWidth / 2, windowHeight / 2, size);
		ellipse(windowWidth / 2.3, windowHeight / 2.3, size);
		ellipse(windowWidth / 2.5, windowHeight / 2.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 2.2, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.30, size);
		ellipse(windowWidth / 3, windowHeight / 3, size);
		ellipse(windowWidth / 3.3, windowHeight / 3.3, size);
		ellipse(windowWidth / 3.3, windowHeight / 1.7, size);
		ellipse(windowWidth / 3.7, windowHeight / 2, size);
		ellipse(windowWidth / 4, windowHeight / 2.4, size);
		ellipse(windowWidth / 3, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 5, size);
		ellipse(windowWidth / 3, windowHeight / 4.9, size);
		ellipse(windowWidth / 5, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 7.5, size);
		ellipse(windowWidth / 3, windowHeight / 7.5, size);
		ellipse(windowWidth / 2.4, windowHeight / 3.6, size);
		ellipse(windowWidth / 2.8, windowHeight / 7, size);
		ellipse(windowWidth / 1.9, windowHeight / 1.7, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 1.8, size);
	} else if (volume >= 0) {
		noStroke();
		fill('#fffeed');
		ellipse(windowWidth / 2, windowHeight / 2, size);
		ellipse(windowWidth / 2.3, windowHeight / 2.3, size);
		ellipse(windowWidth / 2.5, windowHeight / 2.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 2.2, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.30, size);
		ellipse(windowWidth / 3, windowHeight / 3, size);
		ellipse(windowWidth / 3.3, windowHeight / 3.3, size);
		ellipse(windowWidth / 3.3, windowHeight / 1.7, size);
		ellipse(windowWidth / 3.7, windowHeight / 2, size);
		ellipse(windowWidth / 4, windowHeight / 2.4, size);
		ellipse(windowWidth / 3, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 2.1, size);
		ellipse(windowWidth / 2.6, windowHeight / 5, size);
		ellipse(windowWidth / 3, windowHeight / 4.9, size);
		ellipse(windowWidth / 5, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 7.5, size);
		ellipse(windowWidth / 3, windowHeight / 7.5, size);
		ellipse(windowWidth / 2.4, windowHeight / 3.6, size);
		ellipse(windowWidth / 2.8, windowHeight / 7, size);
		ellipse(windowWidth / 1.9, windowHeight / 1.7, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.2, windowHeight / 1.6, size);
		ellipse(windowWidth / 2.4, windowHeight / 1.8, size);
	}

	pop();

	fill('white');
	textFont('Mountains of Christmas');
	textAlign(CENTER);
	textSize(windowWidth / 17);
	text('MERRY CHRISTMAS', width / 3.2, height / 2.4);
	textFont('Playfair Display');
	textAlign(CENTER);
	textSize(windowWidth / 60);
	text('Make as much noise as possible to light your Christmas', width / 3.4, height / 1.5);
	text('and click the background to change the color!', width / 3.4, height / 1.4);

}



function mousePressed() {
	index = index + 1;
	if (index == sfondi.length) {
		index = 0;
		console.log(sfondi);
	}
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
