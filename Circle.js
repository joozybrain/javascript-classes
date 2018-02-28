class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        var num = Math.PI * this.radius ** 2;
        //console.log(num);
        var area = Math.round(num * Math.pow(10, 1)) / Math.pow(10, 1);
        //console.log(area);
        return area;
    }

    perimeter() {
        var num = 2 * Math.PI * this.radius;
        console.log(num);
        var perimeter = Math.round(num * Math.pow(10, 1)) / Math.pow(10, 1);
        return perimeter; 
    }
}


module.exports = Circle;