let temperature=document.getElementById("temperatureInput")
let input=document.getElementById("inputUnit")
let output=document.getElementById("outputUnit")
let button=document.getElementById("convertButton")
let result=document.getElementById("result")

button.addEventListener("click",()=>{

    t=temperature.value
    if(input.value==="celsius" && output.value==="fahrenheit")
    {
        result.innerText=(t * 9/5) + 32

    }
    else if (input.value === "celsius" && output.value === "kelvin") {
        result.innerText = t + 273.15;
    } 
 
    else if (input.value === "fahrenheit" && output.value === "celsius") {
        result.innerText = (t - 32) * 5/9;
    } 
  
    else if (input.value === "fahrenheit" && output.value === "kelvin") {
        result.innerText = ((t - 32) * 5/9) + 273.15;
    } 
  
    else if (input.value === "kelvin" && output.value === "celsius") {
        result.innerText = t - 273.15;
    } 

    else if (input.value === "kelvin" && output.value === "fahrenheit") {
        result.innerText = ((t - 273.15) * 9/5) + 32;
    } 
    
    else if (input.value === output.value) {
        result.innerText = t; 
    } 

})



// Celsius to Fahrenheit: (C * 9/5) + 32
// Celsius to Kelvin: C + 273.15
// Fahrenheit to Celsius: (F - 32) * 5/9
// Fahrenheit to Kelvin: ((F - 32) * 5/9) + 273.15
// Kelvin to Celsius: K - 273.15
// Kelvin to Fahrenheit: ((K - 273.15) * 9/5) + 32