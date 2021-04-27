class Tree{
        constructor(x, y) {
          var options = {
              'isStatic' : true,
              'restitution':0.8,
              'friction':0.3,
              'density':1.0
          }
          this.body = Bodies.rectangle(x, y, 450, 10, options);
          this.image = loadImage("tree.png")
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();   
          translate(pos.x, pos.y)
          imageMode(CENTER);
          image(this.image, 0, -300,  450, 600);
          pop();
        }
      };