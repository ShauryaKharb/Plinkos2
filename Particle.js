class Particle {
    constructor(x, y,r) {

        var options ={
            restitution : 0.1,
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    fly(){
        World.remove(world,this.body);
    }
    score(){
        var pos = this.body.position;
        console.log(pos.y)
        if(pos.y>=495 && pos.y<=505 && pos.x>90 && pos.x < 150){
            score+=1;
        }
        if(pos.y>=495 && pos.y<=505 && pos.x>170 && pos.x < 230){
            score+=2;
        }
        if(pos.y>=495 && pos.y<=505 && pos.x>250 && pos.x < 310){
            score+=2;
        }
        if(pos.y>=500-5 && pos.y<=505 && pos.x>330 && pos.x < 130){
            score+=5;
        }
        if(pos.y>=500-5 && pos.y<=505 && pos.x>410 && pos.x < 470){
            score+=5;
        }
        if(pos.y>=495 && pos.y<=505 && pos.x>490 && pos.x < 550){
            score+=2;
        }
        if(pos.y>=495 && pos.y<=505 && pos.x>570 && pos.x < 630){
            score+=2;
        }
        if(pos.y>=495 && pos.y<=505 && pos.x>650 && pos.x < 710){
            score+=1;
        }
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        strokeWeight(1);
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};