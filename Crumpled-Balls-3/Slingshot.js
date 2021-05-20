class Slingshot{
    constructor(bodyA,pointB){
       
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.001,
            length :12
            }
        
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 fly()
 {
     this.sling.bodyA=null;
 }

    display(){
////console.log(this.sling.bodyB.position)
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x,pointB.y);
       }
    
} 
}