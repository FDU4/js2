const Vector = function(x,y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.plus = function(Vector) {
    Vector.x = Vector.x + this.x;
    Vector.y = Vector.y + this.y;
    return Vector;
};

Vector.prototype.minus = function(Vector) {
    Vector.x = this.x - Vector.x;
    Vector.y = this.y - Vector.y;
    return Vector;
};

Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
        return Math.sqrt(Math.pow(this.x , 2) + Math.pow(this.y , 2));
    }
});

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length);



