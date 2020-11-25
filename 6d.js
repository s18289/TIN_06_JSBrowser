'use strict';

function addRow(tableName) {
  const table = document
    .getElementById(tableName)
    .getElementsByTagName('tbody')[0];

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const age = document.getElementById('age');
  const email = document.getElementById('email');

  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');

  td1.innerHTML = firstName.value;
  td2.innerHTML = lastName.value;
  td3.innerHTML = age.value;
  td4.innerHTML = email.value;

  if (
    firstName.value.length >= 2 &&
    lastName.value.length >= 2 &&
    age.value >= 0 &&
    age.value.length > 0 &&
    // geon@ihateregex.io (email example for regex)
    email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)
  ) {
    tr.append(td1, td2, td3, td4);
    table.append(tr);
    document.getElementById('newRecord').reset();
  }
}
