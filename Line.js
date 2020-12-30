class Line{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 2,
            length : 1
        }
        this.string=Constraint.create(options);
        World.add(world,this.string);
        this.color=color(random(0,255),random(0,255) , random(0,255));
    }

    

    display(){
         if(this.string.bodyA){
            var PointA = this.string.bodyA.position;
            var PointB= this.string.pointB;
            push();
            stroke(this.color);
            strokeWeight(6);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
            pop();
         }
    }
}