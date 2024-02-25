function myFunc(theObject){
    theObject.make = "Toyota";
}

const mycar = {
    make:"Honda",
    model:"Accord",
    year:1998,
};

// Here printing the value of the car
console.log(mycar.make);

// In the const changing the value of the car 
myFunc(mycar);
console.log(mycar.make);