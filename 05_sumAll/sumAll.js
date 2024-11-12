const sumAll = function(start, end){
let triStart = ((start - 1) * (start)) / 2
let triFinal = (end * (end + 1)) / 2
return triFinal - triStart
};

// Do not edit below this line
console.log(sumAll(5, 10));