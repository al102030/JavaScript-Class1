function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw");
    }
}

const c1 = {};
Circle.call(c1, 1)

console.log(c1);

