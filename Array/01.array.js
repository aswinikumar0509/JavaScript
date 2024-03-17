const myarray = [0,1,2,3,4,5,6]


console.log(myarray);

// Array Methods

// 
// myarray.unshift(9)
// myarray.shift()

// console.log(myarray.includes(9))
// console.log(myarray.indexOf(9));

// const newarr = myarray.join()
// console.log(myarray);
// console.log(newarr);
// console.log(typeof newarr);

// slice , splice

console.log("A" , myarray)

const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("B" , myarray);

const myn2 = myarray.splice(1,3)
console.log("C" , myarray)
console.log(myn2);