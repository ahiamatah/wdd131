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


docFullDateAndTime.innerHTML = (` ${day}/${month+1}/${year} ${hours}:${minutes}:${seconds}`);