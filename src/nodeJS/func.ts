let forEach = function (list: number[], callback: Function) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i, list);
    }
};


let NumArr: number[] = [1, 2, 3, 4, 5];

forEach(NumArr, (a: number, b: number, c: number[]) => {
    console.log(`index == ${a},tempNum == ${b}, this Arr ===${c}`)
})

let arr1 = [1,2,3];
let arr2 = [4,5];
arr1.push.apply(arr1,arr2);

console.log(arr1);




