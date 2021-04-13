class Slingshot{
    constructor(body1, body2){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    display(){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}