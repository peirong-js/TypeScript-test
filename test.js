"use strict";
exports.__esModule = true;
var isDo = false;
var age = 10;
var myName = 'peirong';
var message = "hello " + myName;
var numOrStr;
var hello = function (name) {
    return "hello " + name;
};
hello('peirong');
var un = undefined;
var n = null;
var not = 4;
not = 'maybe';
not = true;
not.myName;
not.getName();
// 数组
var arrNumber = [1, 2, 3];
arrNumber.push(3);
// 元祖
var user = ['peirong', 23];
user.push('lili');
user.push(18);
var peirong = {
    id: 1,
    name: 'peirong',
    age: 18
};
// peirong.id = 0717
// 函数
var add = function (x, y, z) {
    if (typeof z === 'number')
        return x + y + z;
    else
        return x + y;
};
var add2 = add;
var add3 = add;
// 
function getLength(input) {
    var str = input;
    if (str.length) {
        return str.length;
    }
    else {
        var number = input;
        return number.toString().length;
    }
}
function getLength2(input) {
    if (typeof input === 'string') {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
// 枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up
var value = 'Up';
if (value === "Up" /* Up */) {
    console.log('go');
}
