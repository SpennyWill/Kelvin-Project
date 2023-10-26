// 293 kelvin is our base temp, this will be a reference for the other temps in F and C
const kelvin = 273; 
// Celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;
// the conversion of fahrenheit to celsius is the annoying one below. Not sure why Americans make things so difficult for themselves. We are using let becuase we will be rounding the number in the next step
let fahrenheit = celsius * (9/5) + 32; 
// this is where we make a whole number for fahrenheit
fahrenheit = Math.floor(fahrenheit); 
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);

let Newton = celsius * (33/100); 
Newton = Math.floor(Newton); 
console.log(`The tempertaure is ${Newton} degrees Newton`);
