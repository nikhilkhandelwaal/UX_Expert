// var arr = [10, 20, 30, 40, 50];

// for (var i of arr) {
//     arr.pop();
// }
// console.log(arr);
// empty array,   


var arr = [10, 20, 30, 40];
for (var i of arr) {
    arr[3] = i;
}
console.log(arr);
// [10,20,40,40],   [10,20,10,40]
// 