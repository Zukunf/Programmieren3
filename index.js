var os = require("os");
var message = "Die Plattform ist";

function main() {
    console.log(message + os.platform());
}
main();


var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
console.log(mySquareObject.getArea());
}

main();


