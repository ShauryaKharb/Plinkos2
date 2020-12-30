class Striker {
    constructor(x,y,w,h){
        var options = {
            'restitution':0.2,
            'friction' : 1,
            'density' : 0.2            
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
        // this.image=loadImage("polygon.png")
    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("#42f566");
        // image(this.image,0,0,100,100);
        rect(0,0,this.width,this.height);
        pop();
    }
}