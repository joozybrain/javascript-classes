var Circle = require("./Circle");

// | radius | area() | perimeter() |
// |-|-|-|
// |1|3.1|6.3|
// |2|12.6|12.6|
// |3|28.3|18.9|

it("Radius 1 should be 3.1 Area", function() {
    var aCircle = new Circle(1);
    expect((aCircle).area()).toEqual(3.1);
});

it("Radius 1 should be 6.3 Perimeter", function() {
    var aCircle = new Circle(1);
    expect((aCircle).perimeter()).toEqual(6.3);
});

it("Radius 2 should be 12.6 Area", function() {
    var aCircle = new Circle(2);
    expect((aCircle).area()).toEqual(12.6);
});

it("Radius 2 should be 12.6 Perimeter", function() {
    var aCircle = new Circle(2);
    expect((aCircle).perimeter()).toEqual(12.6);
});

it("Radius 3 should be 28.3 Area", function() {
    var aCircle = new Circle(3);
    expect((aCircle).area()).toEqual(28.3);
});

it("Radius 3 should be 18.9 Perimeter", function() {
    var aCircle = new Circle(3);
    expect((aCircle).perimeter()).toEqual(18.9);
});