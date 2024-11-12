const removeFromArray = function(inputArray, removed){
    inputArray.push(removed)
    let indexRemoved = inputArray.indexOf(removed)
    for(i = indexRemoved; i < inputArray.length; i++){
        let temp = inputArray[indexRemoved]
        temp = inputArray[i + 1]
        inputArray[i] = temp
    }
    inputArray.pop(inputArray[inputArray.length])
    inputArray.pop(inputArray[inputArray.length])
    return inputArray
};
// Do not edit below this line
console.log(removeFromArray(["cat1", "cat2", "cat3", "cat4"], "cat3"));