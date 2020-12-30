class Divisions {
    constructor( x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;
        // this.body.angle = angle;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        rectMode(CENTER);
        fill("white");
        rotate(angle);
        rect(pos.x, pos.y, this.width, this.height);
        pop ();
    }
};