function myConcat(seperator){
    let result = "";
    for(let i=1;i<arguments.length;i++){
        result += arguments[i] + seperator
    }

    return result
}

console.log(myConcat(",","red","orange","blue"));

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
