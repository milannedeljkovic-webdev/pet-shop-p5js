let pets = [];
let dogImg, catImg;

function preload() {
  catImg = loadImage('https://i.postimg.cc/pXf46cwP/cat.png');
  dogImg = loadImage('https://i.postimg.cc/gc6fv24X/dog.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent(document.querySelector('.hero'));
  noStroke();
  frameRate(30);

  for (let i = 0; i < 12; i++) {
    pets.push({
      x: random(width),
      y: random(height),
      size: random(60, 120),
      speed: random(0.3, 0.8),
      img: random([dogImg, catImg]),
      rot: random(TWO_PI),
      rotSpeed: random(-0.005, 0.005)
    });
  }
}

function draw() {
  clear();
  for (let p of pets) {
    push();
    translate(p.x, p.y);
    rotate(p.rot);
    imageMode(CENTER);
    tint(255, 200);
    image(p.img, 0, 0, p.size, p.size);
    pop();

    p.y += p.speed;
    p.rot += p.rotSpeed;

    if (p.y > height + p.size) {
      p.y = -p.size;
      p.x = random(width);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.8);
}
