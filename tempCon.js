function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let convertedTemperature = 0;

  if (unit === "celsius") {
    convertedTemperature = temperature;
  } else if (unit === "fahrenheit") {
    convertedTemperature = ((temperature - 32) * 5) / 9;
  } else if (unit === "kelvin") {
    convertedTemperature = temperature - 273.15;
  }

  document.getElementById(
    "convertedTemperature"
  ).innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
}
