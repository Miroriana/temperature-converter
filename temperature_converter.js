// Write a function that converts a temperature from Celsius to Fahrenheit
//     ### Formula:
//         tFahrenheit = (tCelcius°C × 9/5) + 32
        
//         Where 
//             tFahrenheit: Temperature in Fahrenheit
//             tCelcius: Temperature in Celcius 

function temperatureConverter(tCelcius){
    var tFahrenheit;
    tFahrenheit = (tCelcius *9/5) + 32;
    return tFahrenheit;
}

const tCelcius= 40;
console.log(tCelcius,"degrees Celcius converted to Fahrenheit is ",temperatureConverter(tCelcius));