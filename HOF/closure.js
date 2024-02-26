// const pet = function(name) {
//     const getName = function(){
//         return name;
//     };
//     return getName;
// }

// const myPet = pet("something");
// console.log(myPet());

const createPet = function(name){
    let sex;

    const pet ={
        setName(newName){
            name = newName;

        },

        getName(){
            return name;
        },

        getSex(){
            return sex;
        },

        setSex(newSex){
            if(
                typeof newSex=="string" &&
                (newSex.toLowerCase()==="male" || newSex.toLowerCase()==="female")
            ){
                sex = newSex
            }
        },
    };
    return pet
}


const pet = createPet("something");
console.log(pet.getName());

pet.setName("anything");
pet.setSex("male")
console.log(pet.getSex());
console.log(pet.getName());