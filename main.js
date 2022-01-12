x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
to_number="";
draw_apple ="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
to_number= Number(content);
if(Number.isInteger(to_number)==true)
{
  draw_apple="set";
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
}
else
{
  document.getElementById("status").innerHTML="The Speech has not recognized a number.";
}

}

function preload()
{
  apple=loadImage("https://i.postimg.cc/jSfXdTq6/apple.png");
}
new_height=screen_height-150;
function setup() 
{
  canvas=createCanvas(screen_width, new_height);
  canvas.position(CENTER);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(let i=0; i <= to_number; i++)
    {
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple, x, y, 70, 70);
    }
    speak_data=to_number + " Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
