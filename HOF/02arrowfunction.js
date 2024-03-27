const user =  {
    username : "aswini",
    price :999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website.`);
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "aswini"
//     console.log(this.username);
// }

// chai()


const chai =  () => {
    let username = "aswini"
    console.log(this);
}

// chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }


// const addtwo = (num1,num2) => (num1+num2)


// console.log(addtwo(3,4));

const addtwo = (num1,num2) => ({username:"aswini"})


console.log(addtwo());