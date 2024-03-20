function calculateCardPrice(...num1) {

    // rest operator {...} symbol

    return num1

}

console.log(calculateCardPrice(2,3,4,5,6,7,8));


const user = {
    username : "aswinin",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObject(user)

const myArr = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArr));
