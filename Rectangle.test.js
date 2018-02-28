var Rectangle = require("./Rectangle");

// | breadth | length | area() | perimeter() |
// |-|-|-|-|
// |2|4|8|12|
// |5|10|50|30|

it("Breath 2 and Length 4 should be 8 Area", function() {
    var aRectangle = new Rectangle(2,4);
    expect((aRectangle).area()).toEqual(8);
});

it("Breath 2 and Length 4 should be 12 Perimeter", function() {
    var aRectangle = new Rectangle(2,4);
    expect((aRectangle).perimeter()).toEqual(12);
});

it("Breath 5 and Length 10 should be 50 Area", function() {
    var aRectangle = new Rectangle(5,10);
    expect((aRectangle).area()).toEqual(50);
});

it("Breath 5 and Length 10 should be 30 Perimeter", function() {
    var aRectangle = new Rectangle(5,10);
    expect((aRectangle).perimeter()).toEqual(30);
});