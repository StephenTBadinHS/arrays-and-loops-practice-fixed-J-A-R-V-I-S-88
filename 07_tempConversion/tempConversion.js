const convertToCelsius = function(F) {
    let celcius =  (5 / 9) * (F - 32)
    return Math.round(10 * celcius) / 10
};

const convertToFahrenheit = function(C) {
    let fahrenheit = ((9 / 5) * C) + 32
    return Math.round(10 * fahrenheit) / 10
};

// Do not edit below this line
const degreesFromCelcius = [];
for(i = 0; i <= 100; i++){
    degreesFromCelcius[i] = convertToFahrenheit(i);
}
const degreesFromFahrenheit = [];
for (i = 0; i <= 212; i++){
    degreesFromFahrenheit[i] = convertToCelsius(i);
}
console.log(degreesFromCelcius);
console.log(degreesFromFahrenheit);