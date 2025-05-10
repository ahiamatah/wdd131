// alert('linked')

const FullDate = Date();

const date = new Date();

const year = date.getFullYear();
let docYear = document.querySelector('#currentyear');

docYear.innerHTML = (year);

let docFullDateAndTime = document.querySelector('#currentdate');

const day = date.getDay();
const month = date.getMonth();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hours < 10) hours = '0' + hours;
if (minutes < 10) minutes = '0' + minutes;
if (seconds < 10) seconds = '0' + seconds;

docFullDateAndTime.innerHTML = (` ${day}/${month+1}/${year} ${hours}:${minutes}:${seconds}`);