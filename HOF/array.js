function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [35];
console.log(arr[0]);

myFunc(arr)

console.log(arr[0])
