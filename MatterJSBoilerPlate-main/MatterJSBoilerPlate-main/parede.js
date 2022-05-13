class Ground {
    constructor(x, y, w, h){
        var parado = { isStatic: true };
        this.body = Bodies.rectangle(x, y, w, h, parado);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    show() {
        var pos = this.body.position;
        push();
        fill("grey")
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }

}