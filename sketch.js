let i = 1, i2 = 1;

function setup() {
angleMode(DEGREES);
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
rotateX(-30);
    if(frameCount<380)
    rotateY(frameCount * 3);
    else if(frameCount>380 && frameCount<950){
    background(255,0,0);
    rotateY(frameCount * (3-(i*0.09)));
    rotateZ(1/3*i);
    i++;
    }
    else if(frameCount>950 && frameCount<1200){
    rotateY(frameCount * 0.3);
    rotateZ(10);
    }
    else if(frameCount>1200 && frameCount<1350){
    rotateX(30);
    rotateZ(10);
    }
    else if(frameCount>1350 && frameCount<1740){
    rotateY(frameCount * 0.3);
    }
    else{
    rotateY(frameCount * 3);
    }
fill(255, 0, 0);
cone(50, 100);
  console.log(frameCount);
}
