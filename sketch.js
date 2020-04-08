
var r =220;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,800);
 
}


function draw(){
 


  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,1200,0,200);
   
  // change the value of Green based on the mouse movement about the X axis
  g= map(mouseY,0,1200,0,250);
    
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,0,1200,0,155);
   // b = r+g;
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  fill ("white");

  ellipse(mouseX,mouseY,25,25);
}