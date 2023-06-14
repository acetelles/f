function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')

}

function setup(){
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
    
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

function draw(){
    image(video, 0, 0, 300, 300);
    fill(153, 51, 102);
    stroke(153, 51, 102);
    circle(noseX, noseY, 20);
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }


function modelLoaded(){
    console.log('PoseNet está inicializado');
}   

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }
}

nosex = 0;
nosey = 0; //this hilarious, noseyñ  BAHAHA


