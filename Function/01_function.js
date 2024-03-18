// function sayMyName(nam) {

//     for(let i=0 ; i<len(nam);i++){
//         console.log(i);
//     }

// }


// sayMyName("aswini")

// function addtwonumber(number1,number2) {
//     console.log(number1+number2);
// }

// addtwonumber(1,2)

function addtwonumber(number1,number2) {
    let result = number1 + number2
    return result
}
const result=addtwonumber(3,4)
console.log("Result : ",result);

function loginUserMessage(username) {
    return `${username} just looged in`
}

console.log(loginUserMessage("aswini"));