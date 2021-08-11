img="";
status="";
object=[];
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status-Detecting Object";
}
function draw(){

image(img,0,0,640,420);
if (status!="") {
    for (i=0; i<object.lenght; i++) {
        document.getElementById("status").innerHTML="Status-Object Detected";
        fill("#ff0800");
        percent=floor(object[i].confidence*100)
        text(object[i].label+" "+ percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("#ff2600");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if (error) {
    console.log(error);
} else {
    console.log(results)
    object=results;
}
}