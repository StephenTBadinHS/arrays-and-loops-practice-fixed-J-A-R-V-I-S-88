const repeatString = function(string, num){
    let str = string
    for(let i = 1; i < num; i++){
        str = str + string
    }
    return str
};

// Do not edit below this line
console.log(repeatString("hello", 1));
