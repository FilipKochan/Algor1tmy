var n = 0;
var c = 5;
var ang = 137.5;
let sliderC;
let sliderA;
function setup(){
    createCanvas(500, 500);
    // cnv.parent('phylloaxis');
    background(0);
    angleMode(DEGREES);
    colorMode(HSB);
    sliderC = createSlider(0, 15, 5);
    sliderC.style('width', '100px');
    sliderAng = createSlider(90, 180, 137.5);
    sliderAng.style('width', '100px');
}
function draw(){
    translate(width / 2, height / 2);
    var cprev = c;
    var angprev = ang;

    c = sliderC.value();
    ang = sliderAng.value();
    if(cprev != c || angprev != ang){
        n = 0;
        background(0);
    }
    var a = n * 137.5;
    var r = c * sqrt(n);

    var x = r * cos(a);
    var y = r * sin(a);

    var rad = 16;
    // fill((n + random(-40,40)) % 256, 100, 255);
    fill((r * 5 + random(-50, 50)) % 256, r % 246 + 10, n % 246 + 10);
    ellipse(x, y, rad, rad);
    n++;

    // if(r + rad / 2 > width / 2 || r + rad / 2 > height / 2)
    //     noLoop();
}