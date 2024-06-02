let slider;
let button;
let showLine = false;

function setup() {
  createCanvas(400, 400);
  // Create a slider to adjust the spacing of the left circles
  slider = createSlider(0, 255, 150); // Set initial value to 150
  slider.position(10, 10);
  slider.size(300);
  
  // Create a button to toggle the visibility of the dashed line
  button = createButton('Toggle Line');
  button.position(10, 40);
  button.mousePressed(toggleLine);
}

function draw() {
  background(127); // Set the background color

  // Define variables for the rectangle
  let obj_width = 100;
  let obj_height = 300;
  let obj_x = (3 * width / 4) - (obj_width / 2);
  let obj_y = (height / 2) - (obj_height / 2);

  // Draw the rectangle in the right half of the canvas
  fill(0);
  stroke(0, 0, 0);
  strokeWeight(1);
  rect(obj_x, obj_y, obj_width, obj_height);

  // Define variables for the circles
  let dot_rad = 4;
  let dot_space = 150; // Fixed space for right circles
  let adj_dot_space = slider.value(); // Get slider value for left circles

  // Draw the left circles with adjustable spacing
  fill(255, 0, 0);
  circle(width / 4 - dot_rad, height / 2 - adj_dot_space / 2, dot_rad * 2);
  circle(width / 4 - dot_rad, height / 2 + adj_dot_space / 2, dot_rad * 2);

  // Draw the right circles with fixed spacing
  circle(3 * width / 4 - dot_rad, height / 2 - dot_space / 2, dot_rad * 2);
  circle(3 * width / 4 - dot_rad, height / 2 + dot_space / 2, dot_rad * 2);

  // Draw the dashed line if toggled on
  if (showLine) {
    stroke(255, 0, 0);
    strokeWeight(2);
    drawingContext.setLineDash([5, 5]); // Set the line dash pattern
    line(0, height / 2 - adj_dot_space / 2, width, height / 2 - adj_dot_space / 2);
    line(0, height / 2 + adj_dot_space / 2, width, height / 2 + adj_dot_space / 2);
    drawingContext.setLineDash([]); // Reset the line dash pattern
  }
}

function toggleLine() {
  showLine = !showLine;
}
