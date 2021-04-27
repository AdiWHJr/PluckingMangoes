class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      translate(pos.x ,pos.y)
      fill("white")
      stroke('white')
      image(this.image,0,0, this.width, this.height);
    }
  };