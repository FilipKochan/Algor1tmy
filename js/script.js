var arr = [];
var delka = 50;
var j = 0;
function setup(){
  createCanvas(1000, 600);
  // canvas.parent('sort');
  background(0);
  for (var i = 0; i < delka; i++) {
   arr[i] = floor(random(101));

   fill(255);
   stroke(255, 0, 0);
   strokeWeight(1);
   rect(i * (width / delka), height, floor(width / delka), -map(arr[i], 0, 100, 0, height));
  }

}

function draw(){

  


  j++;
  if(j == delka) noLoop();
}
