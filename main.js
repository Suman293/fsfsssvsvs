song = "";
leftwristx = 0
rightwrist_x = 0
leftwristy = 0
rightwrist_y = 0

function preload()

{
    song = loadSound("music.mp3");
}

function setup()
{
   canvas = createCanvas(600,500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();
PoseNet = ml5.poseNet(video,modelLoaded)
PoseNet.on("pose", gotPoses)
}

function draw()
{
 image(video, 0, 0, 600, 500);
}

function Play_song()
{
    song.setVolume(1);
    song.rate(1)
    song.play()

}

function modelLoaded()
{
    console.log('Model has been Initiated');
}

function gotPoses(result)
{
 if (result.length>0) {
    console.log(result)
    leftwristx = result[0].pose.leftWrist.x
    leftwristy = result[0].pose.leftWrist.y
    rightwrist_x = result[0].pose.rightWrist.x
    rightwrist_y = result[0].pose.rightWrist.y
 }
}