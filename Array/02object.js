// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.anme = "Sammy"
tinderUser.isLoogedIn = false
console.log(tinderUser);

const regularUser = {
    email:"aswini@adlnvslnv.com",
    fullname : {
        userfullName:{
            firstname:"aswini",
            lastname:"kumar"
        }

    }
}

// console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3)