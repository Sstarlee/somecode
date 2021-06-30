"use strict";
let forEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i, list);
    }
};
let NumArr = [1, 2, 3, 4, 5];
forEach(NumArr, (a, b, c) => {
    console.log(`index == ${a},tempNum == ${b}, this Arr ===${c}`);
});
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
arr1.push.apply(arr1, arr2);
console.log(arr1);
//# sourceMappingURL=func.js.map