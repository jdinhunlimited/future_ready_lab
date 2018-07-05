//setup is run once at the beginning before we draw
function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 200, 255);
      frameRate(30)
  }
    
    
    else {
    fill(color(0));
  }
    //to random both the height and width the same amount, we make a variable. 
    var diameter = random(400)
  ellipse(mouseX, mouseY, diameter, diameter);
    
}