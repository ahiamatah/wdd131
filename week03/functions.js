function fullName(first, last){
    console.log(`${first} ${last}`);
}

let firstName = 'Antonia';
let lastName = 'Francesca';

fullName(firstName, lastName);

const fullName1 = function (first, last) {
  return `${first} ${last}`;
}

let name1 = fullName1(firstName, lastName);

console.log(name1);

const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;


console.log(fullName2(firstName, lastName));