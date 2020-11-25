'use strict';

const age = document.getElementById('age');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

age.addEventListener('change', (event) => {
  if (event.target.value <= 0) {
    age.classList.remove('validAge');
    age.classList.add('invalidAge');
  } else {
    age.classList.add('validAge');
  }
});

// geon@ihateregex.io (email example for regex)

email.addEventListener('change', (event) => {
  if (event.target.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)) {
    email.classList.add('validAge');
  } else {
    email.classList.remove('validAge');
    email.classList.add('invalidAge');
  }
});

function isValidForm() {
  if (
    email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm) &&
    age.value > 0
  ) {
    console.log('true ');
    return true;
  }
  console.log('false ');
  return false;
}
