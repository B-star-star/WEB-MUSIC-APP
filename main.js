
Harry Potter Theme Song="";
Peter Pan="";


function setup(){
  canvas=createCanvas(500,400);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();
}


function preload(){
    Harry Potter Theme Song =loadSound("music.mp3");
    Peter Pan =loadSound("music2.mp3");
}

function draw(){

    image(video,0,0,500,400);
}