'use strict';

const rootDiv = document.getElementById('rootDiv');

rootDiv.addEventListener('onload', setTimeout(myTimer, 5000));

function myTimer() {
  const p = document.createElement('p');
  p.innerHTML = 'This is a Paragraph';
  rootDiv.append(p);
}
