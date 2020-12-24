class Drop{
    constructor(x,y){
        var op={
            restitution:0.8
        }

        this.body=Bodies.circle(x,y,8,op)
        World.add(wo,this.body)
    }

    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,8,8)
    }
}