let ball;
const carro1 = [];
let carro2 = [];
let carro1X ;
let carro1Y; 
let direccion = 1;
let direccion2 = 1;
let car1Vuelta = 0;
let car2Vuelta = 0;
let fin = false
let s = '';

function preload(){
	carro1[1] = loadImage(`img/carro1DER.png`);
	carro1[2] = loadImage(`img/carro1AB.png`);
	carro1[3] = loadImage(`img/carro1IZQ.png`);
	carro1[4] = loadImage(`img/carro1UP.png`);

	carro2[1] = loadImage(`img/carro2.png`);
	carro2[2] = loadImage(`img/carro2AB.png`);
	carro2[3] = loadImage(`img/carro2IZQ.png`);
	carro2[4] = loadImage(`img/carro2UP.png`);

}
function setup(){
	createCanvas(windowWidth,windowHeight);
	carro1X = windowWidth/2;
	carro1Y = windowHeight*.08;
	carro2X = windowWidth/2;
	carro2Y = windowHeight*.08 - 50;
	ball = new Ball();
	frameRate(30	);
	angleMode(DEGREES);

}

function draw(){
	background('gray')
	ball.draw()

	switch(direccion2){

		case 1:
		textSize(32);
		text(car2Vuelta, windowWidth-50, 30);
			if(carro2X<(windowWidth*.91)){
				image(carro2[direccion2],carro2X+=05+(random(15)),carro2Y,50,50)
			}
			if(carro2X>windowWidth*.90){
				direccion2=2
				carro2X+=10;
			}
			if (carro2X < windowWidth/2 + 5 && carro2X >= windowWidth/2 - 5 )
			{
				car2Vuelta++;
			}
		break;
		case 2:
			if(carro2Y<windowHeight*.86)image(carro2[direccion2],carro2X+=.01,carro2Y+=05+(random(15)),50,50)
			if(carro2Y>=windowHeight*.86){
				direccion2=3;
				carro2Y+=20;
			}
		break;
		case 3:
			image(carro2[direccion2],carro2X-=05+(random(15)),carro2Y,50,50)
			if(carro2X<= windowWidth*.06)direccion2=4
		break;
		case 4:
			image(carro2[direccion2],carro2X,carro2Y-=05+(random(15)),50,50)
			if(carro2Y<=windowHeight*.1){
				direccion2=5;
				carro2Y -= 20;
			}
		break;
		case 5:
		if(carro2X<(windowWidth/2)){
				image(carro2[1],carro2X+=05+(random(15)),carro2Y,50,50)
		}
		if(carro2X>=windowWidth/2){
				direccion2=1
				car2Vuelta++;
			}
		break;
	}

	switch(direccion){

		case 1:
		textSize(32);
		text(car1Vuelta, 10, 30);
			if(carro1X<(windowWidth*.91)){
				image(carro1[direccion],carro1X+=05+(random(15)),carro1Y,40,40);
			}
			if(carro1X>windowWidth*.90){
				direccion=2;
				carro1X -= 05;
			}
			if (carro1X < windowWidth/2 + 5 && carro1X >= windowWidth/2 - 5 )
			{
				car1Vuelta++;
			}
		break;
		case 2:
			if(carro1Y<windowHeight*.86)image(carro1[direccion],carro1X+=.01,carro1Y+=05+(random(15)),40,40)
			if(carro1Y>=windowHeight*.86)direccion=3;
		break;
		case 3:
			image(carro1[direccion],carro1X-=05+(random(15)),carro1Y-=.3,40,40);
			if(carro1X<= windowWidth*.06)direccion=4;
		break;
		case 4:
			image(carro1[direccion],carro1X,carro1Y-=05+(random(15)),40,40)
			if(carro1Y<=windowHeight*.1){
				direccion=5;
				carro1Y +=10;
			}
		break;
		case 5:
		if(carro1X<(windowWidth/2)){
				image(carro1[1],carro1X+=05+(random(15)),carro1Y,40,40)
		}
		if(carro1X>=windowWidth/2){
				direccion=1;
				car1Vuelta++;
			}
		break;
	}



	if(fin == true)
	{
		fill(50);
		textSize(32);
		text(s, windowWidth/2, windowHeight/2);
		noloop();
	}else{
		if (carro1X >= windowWidth/2 && car1Vuelta >=3){
		fin = true;
		s = 'Car 1 is the WINNER!!!';
	}else{
		if (carro2X >= windowWidth/2 && car2Vuelta >=3){
			fin = true;
			s = 'Car 2 is the WINNER!!!';
		}
	}
	}

}


