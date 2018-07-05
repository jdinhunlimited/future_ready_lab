//define an object that describe a circle
var circle = {
    diameter:80, 
    xCoor: 0,
    yCoor: 0,
    color: [255, 0, 0],
    xSpeed: 10, 
    ySpeed: 10
}
//setup is run once at the beginning before we draw
function randomColor() {
    return [random(0,255), random(0,255), random(0,255)];
}
function setup() {
  createCanvas(640, 480);
    background(210,255, 46);
    frameRate(30)
}
function draw() {
    fill(circle.color);
      //use circle dot to show that it is inside a variable. 
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    //if the xCoor of circle is greater than the length of the canvas, bounce back
    if(circle.xCoor > 640){
        circle.color = randomColor();
        circle.xSpeed = -circle.xSpeed;
    }else if(circle.xCoor < 0){
        circle.xSpeed = -circle.xSpeed;
        //color is randomized 
        circle.color = randomColor();
    }
    circle.xCoor += circle.xSpeed;
    
    if(circle.yCoor > 480){
        circle.color = randomColor();
        circle.ySpeed = -circle.ySpeed;
        circle.diameter = random(10,80)
    }else if(circle.yCoor < 0){
        circle.ySpeed = -circle.ySpeed;
        //color is randomized 
        circle.color = randomColor();
    }
    circle.yCoor += circle.ySpeed;
}
//make circle bounce in y position and changes size each time.
