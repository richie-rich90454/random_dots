let xF=[];
let yF=[];
function setup() {
  createCanvas(400, 400);
  background(0);
  stroke("#FFF");
  for (let i=0;i<1000;i++){
    xF[i]=Math.random()*400;
    yF[i]=Math.random()*400;
    point(xF[i],yF[i]);
  }
  for (let i=0;i<1000;i++){
    point(changeX(xF[i]),changeY(yF[i]));
  }
}
function reDraw1(){
  background(0);
  // let xF=[];
  // let yF=[];
  for (let i=0;i<1000;i++){
    point(xF[i],yF[i]);
  }
  for (let i=0;i<1000;i++){
    point(changeX(xF[i]+mouseX/50),changeY(yF[i]+mouseY/50));
  }
}
function reDraw2(){
  background(0);
  // let xF=[];
  // let yF=[];
  for (let i=0;i<1000;i++){
    point(xF[i],yF[i]);
  }
  for (let i=0;i<1000;i++){
    point(changeX(xF[i]+Math.pow(mouseX,0.5)),changeY(yF[i]+Math.pow(mouseY*2,0.5)));
  }
}
function changeX(x){
  return x*1.6;
}
function changeY(y){
  return y*2;
}
function mouseMoved(){
  console.log(mouseX+" "+mouseY);
  reDraw1();
}
function mouseDragged(){
  console.log(mouseX+" "+mouseY);
  reDraw2();
}
// function draw() {
// }