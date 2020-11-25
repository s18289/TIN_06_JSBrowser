'use strict';

const input = document.getElementById('inputField');
const result = document.getElementById('resultField');

const input2 = document.getElementById('inputField2');
const result2 = document.getElementById('resultField2');

const btncToF = document.getElementById('btncToF');
const btnfToC = document.getElementById('btnfToC');

btncToF.addEventListener('click', (event) => {
  event.preventDefault();
  cToF(input.value);
});

btnfToC.addEventListener('click', (event) => {
  event.preventDefault();
  fToC(input2.value);
});

function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = (cTemp * 9) / 5 + 32;
  result.value = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
}

function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = ((fTemp - 32) * 5) / 9;
  result2.value = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
}
