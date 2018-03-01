class Rectangle {
    constructor(breath, length) {
        this.breath = breath;
        this.length = length;
    }

    area() {
        return this.breath * this.length;
    }

    perimeter() {
        return this.breath*2 + this.length*2; 
    }
}

//
module.exports = Rectangle;