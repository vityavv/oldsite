square one = new square(5, 20, 200, 200, 30  );
square two = new square(5, 20, 300, 300, 50);
square three = new square(5, 20, 100, 100, 20);

void setup() {
  size(400, 400);
  frameRate(10);
  background(64, 180, 173);
  fill(234, 64, 204);
};

void draw() {
  one.display();
  two.display();
  three.display();
};
class square {
  float diameter;
  float speed;
  float pulse;
  int x;
  int y;
  
  square(float a, float b, int c, int d, float e) {
    speed = a;
    pulse = b;
    diameter = e;
    x = c;
    y = d;
  }
  
  void display() {
    pushMatrix();
    int s = random(-pulse, pulse);
    x += random(-speed, speed);
    y += random(-speed, speed);
    rectMode(CENTER);
    rect(x + s, y + s, diameter + s, diameter + s);
    popMatrix();
  };
};

