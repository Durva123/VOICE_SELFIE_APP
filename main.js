var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){
console.log(event);
var content=event.results[0][0].transcript;

document.getElementById("text").innerHTML=content;
console.log(content);
if(content=="Hey, Camera, Take My Selfie"){
    speak();
}
}

function speak(){
    var synth = window.speechSynthesis;
    speak_text="Taking Your Selfie In 5 Seconds";
    var speakthis=new SpeechSynthesisUtterance(speak_text);
    synth.speak(speakthis);
    Webcam.attach(camera);
    
    setTimeout(function()
    {
        take_selfie();
        save_me();
    },5000);    
}
var camera=document.getElementById("camera");
Webcam.set({
 width:350, 
 height:250,
  img_format:"jpeg",
jpeg_quality:90

});

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("space").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    });
}

function save_me(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}