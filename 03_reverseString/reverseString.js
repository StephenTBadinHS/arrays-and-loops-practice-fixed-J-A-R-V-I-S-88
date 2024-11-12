const reverseString = function(string){
    let length = string.length
    const stringArray = []
    for(i = 0; i < length; i++){
        stringArray[i] = string.charAt(i);
    }
    const arrayReversed = stringArray.toReversed();
    let reversedString = arrayReversed[0];
    for(i = 1; i < length; i++){
        reversedString = reversedString + arrayReversed[i];
    }
    return reversedString
};

// Do not edit below this line
console.log(reverseString("hello there"));