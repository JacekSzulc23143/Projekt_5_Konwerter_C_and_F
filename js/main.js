const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

// T(°F) = T(°C) x 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const swap = () => {
	if (one.innerText === "°C") {
		one.innerText = "°F";
		two.innerText = "°C";
		result.innerText = "";
	} else {
		one.innerText = "°C";
		two.innerText = "°F";
		result.innerText = "";
	}
};

const celToFahr = () => {
	fahrenheit = converter.value * 1.8 + 32;
	result.innerText = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
	converter.value = "";
};

const fahrToCel = () => {
	celsius = (converter.value - 32) / 1.8;
	result.innerText = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
	converter.value = "";
};

const conversion = () => {
	if (converter.value !== "") {
		if (one.innerText === "°C") {
			celToFahr();
		} else {
			fahrToCel();
		}
	} else {
		result.innerText = "Musisz wpisać jakąś liczbę!";
	}
};

const reset = () => {
	converter.value = "";
	result.innerText = "";
};

convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
