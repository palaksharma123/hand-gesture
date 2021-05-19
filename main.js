Webcam.set({
width:360,
height:360,
image_format:'png',
png_quuuality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML='<img id="captured_image"src="'+data_uri+'"/>'
    })
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/218a1vnD9/',modelLoded);