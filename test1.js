var x;
x = 2;
y = 3;
var book = {
    topic:"javascript",
    fat: true
}

function plus1(x) {
    return x+1;
}

var square = function(x) {
    return x*x;
};

var points = [
    {x:0, y:0},
    {x:1, y:1}
]

function Point(x,y) {
    this.x = x;
    this.y = y;
}

points.dist = function() {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(a*a+b*b)
}

console.log(points.dist(points));

