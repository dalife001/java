'use strict';
const names = ['John', 'Paul', 'Jones'];
for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.innerText = names[i];
    document.getElementById('target').appendChild(li);
}