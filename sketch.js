let xF=[];
let yF=[];
let ready=false;
let N=1000;
function setup(){
    createCanvas(400, 400);
    background(0);
    stroke("#FFF");
    for (let i=0;i<N;i++){
        xF[i]=random(width);
        yF[i]=random(height);
        point(xF[i], yF[i]);
    }
    for (let i=0;i<N;i++){
        point(changeX(xF[i]), changeY(yF[i]));
    }
    ready=true;
    noLoop();
}
function reDraw1(){
    background(0);
    for (let i=0;i<N;i++){
        point(xF[i], yF[i]);
    }
    for (let i=0;i<N;i++){
        point(changeX(xF[i]+mouseX/50), changeY(yF[i]+mouseY/50));
    }
}
function reDraw2(){
    background(0);
    for (let i=0;i<N;i++){
        point(xF[i], yF[i]);
    }
    for (let i=0;i<N;i++){
        point(changeX(xF[i]+sqrt(mouseX)), changeY(yF[i]+sqrt(mouseY*2)));
    }
}
function changeX(x){
    return x*1.6;
}
function changeY(y){
    return y*2;
}
function mouseMoved(){
    if (ready){
        reDraw1();
    }
}
function mouseDragged(){
    if (ready){
        reDraw2();
    }
}