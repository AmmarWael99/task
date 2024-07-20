function convertToFahrenheit(event) {
    event.preventDefault();

    var celsius = document.getElementById("celsiusInput").value;

    var fahrenheit = (celsius * 9/5) + 32;
    
    document.getElementById("temperature is").textContent = celsiusValue + "°C is " + fahrenheitValue + "°F";
}