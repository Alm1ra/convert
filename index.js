const temp_button = document.querySelector(".btn-temp");
const len_button = document.querySelector(".btn-length");
const buttons = document.querySelectorAll(".btn-header");
const arrLen = [
  "Meter (m)",
  "Centimeter (cm)",
  "Millimeter (mm)",
  "Kilometer (km)",
  "Foot (ft)",
  "Inch (in)",
  "Mile (mi)",
];

const arrTemp = [
  "Celsius (°C)",
  "Fahrenheit (°F)",
  "Kelvin (K)",
  "Rankine (°R)",
];

const arrWeight = [
  "Kilogram (kg)",
  "Gram (g)",
  "Milligram (mg)",
  "Tonne (t)",
  "Pound (lb)",
  "Ounce (oz)",
  "Stone (st)",
];

function changeSelectValues(arr) {
  for (var i = 0; i < arr.length; i++) {
    select_convFrom.appendChild(
      new Option(arr[i], arr[i].split(" ")[0].toLowerCase())
    );
    select_convTo.appendChild(
      new Option(arr[i], arr[i].split(" ")[0].toLowerCase())
    );
  }
}

for (button of buttons) {
  button.addEventListener("click", (e) => {
    var chosen_option = e.target.textContent.toUpperCase();
    document.querySelector(".content-header").innerHTML = chosen_option;

    select_convFrom = document.getElementById("conv-from");
    select_convTo = document.getElementById("conv-to");
    select_convFrom.innerHTML = "";
    select_convTo.innerHTML = "";

    if (chosen_option === "LENGTH") {
      changeSelectValues(arrLen);
    } else if (chosen_option === "TEMPERATURE") {
      changeSelectValues(arrTemp);
    } else {
      changeSelectValues(arrWeight);
    }
  });
}
