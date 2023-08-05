function celsiusToFahrenheit(celsius){
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
};

document.getElementById("calculate").onclick = function() {
    var tempCelsius = document.getElementById("cel").value;

    if(tempCelsius == "") {
        alert("Temperature is invalid")
    }

document.getElementById("fahr").value = celsiusToFahrenheit(tempCelsius);
}










