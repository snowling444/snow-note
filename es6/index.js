console.log("boring");

function f(x,y){
  console.log(x+y)
}
f(3,6);

// var add = (x,y) => x+y;
// alert(add(5,6));

function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
}
var point = new Point(6,3);
console.log(point.toString());//(6,3)

for (let i = 0; i < 3; i++) {
  console.log("out", i);
  for (let i = 0; i < 2; i++) {
    console.log("in", i);
  }
}

const [a, b, c, d, e] = 'hello';
console.log(a +'\n' + b +'\n'+ c +'\n'+ d +'\n'+ e);


var numbers = [1, 2, 3, 4];
numbers.forEach(function(item, index, array) {
  console.log(item + "\t" + index + "\t" + array);
});
var array = [1, 2, 3];

var numbers = [1, 2, 3, 4];
numbers.forEach((item, index, array) => console.log(item + "\t" + index + "\t" + array));
var array = [1, 2, 3];

function add (x,y){
  x;
  y = y || 20
  return x+y
}
console.log(add(5));


function add (x=10,y=20){
  return x+y
}
console.log(add(5));
