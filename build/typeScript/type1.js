"use strict";
/*************************************************************************
 *
 *  此模块包含关于TYPE的一些学习与测试
 *
 *
 */
function hello(name) {
    console.log("hello , " + name);
}
hello("lxx");
var Body = /** @class */ (function () {
    function Body() {
        this.bodyName = "lxx";
    }
    return Body;
}());
var person = { personName: "lxx" };
var body = new Body();
console.log("ineter = " + Object.keys(person).length);
console.log("class = " + Object.keys(body).length);
var constType = 123;
/**let 与 var 的区别 */
for (var i = 0; i < 100; i++) {
    setTimeout(function () {
        console.log("喜刷刷", i);
    }, 100 * i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log("喜刷刷", i_1);
    }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 100; i_1++) {
    _loop_1(i_1);
}
// try {
//     throw "oh no!";
// }
// catch (e) {
//     console.log("Oh well.");
// }
// class Shape {
//     public color: string;
//     constructor() {
//         this.color = "red";
//     }
// }
// class Square extends Shape {
//     public sideLength: number;
//     constructor() {
//         super();
//         this.sideLength = 99;
//         this.color = "bule";
//     }
// }
// let square = new Square();
// // square.color = "blue";
// // square.sideLength = 10;
// // console.log(square);
// abstract class ab {
//     abstract get(value1: number): number;
// }
// class ab1 extends ab {
//     get(value1: number): number {
//         return value1;
//     }
//     // create(){
//     //     return ab1;
//     // }
// }
// class ab2 extends ab {
//     get(value1: number): number {
//         return value1 + 1;
//     }
//     // create(){
//     //     return ab1;
//     // }
// }
// class ab3 extends ab {
//     get(value1: number): number {
//         return value1 + 2;
//     }
//     // create(){
//     //     return ab1;
//     // } 
// }
// interface exendTest {
//     [key: string]: ab;
// }
// let test1: exendTest = {};
// test1['ab1'] = new ab1();
// test1['ab2'] = new ab2();
// test1['ab3'] = new ab3();
// console.log(test1['ab1'].get(45456));
// console.log(test1['ab2'].get(123));
// console.log(test1['ab3'].get(123));
// class num1 {
//     a: number;
//     constructor() {
//         this.a = 2;
//     }
// }
// class num2 {
//     a: number;
//     b: number;
//     constructor() {
//         this.a = 2;
//         this.b = 3;
//     }
// }
// let a1 = new num1();
// let b1 = new num2();
// if(a1===b1){
//     console.log("123")
// }else{
//     console.log("456")
// }
//# sourceMappingURL=type1.js.map