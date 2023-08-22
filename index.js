let firstName = 'Thiago'; // string literal
let lastName = undefined; // variável sem valor declarado é undefined
let age = 35; // number literal (JavaScript não tem int e float)
let isApproved = true; // boolean literal
let selectedNumber = null; // object que limpa o valor da variável
const interestRate = 0.3;

console.log('Hello, World...');
console.log(firstName, lastName);
console.log(interestRate);

console.log(typeof firstName); // string
firstName = 1;
console.log(typeof firstName); // number
console.log(typeof selectedNumber); // object

let person = {
    name: 'Xis',
    address: 'Balneário Dospaunocú'
};  // object literal (tipo dicionário do python)
console.log(person);

person.name = 'Xis2hi'; // dot notation
console.log(person.name);

person['name'] = 'Xisnothi'; // bracket notation
let selection = 'name';
person[selection] = 'Xisnothi';
console.log(person.name);

let selectedColor =['red','blue']; // array literal (tipo lista do python)
selectedColor[2] = 1;
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor[1], selectedColor[2]);
console.log(typeof selectedColor); // object
console.log(selectedColor.length);

// função que realiza uma tarefa
function greet(name1, name2){
    console.log('Hello, ' + name1 + ' ' + name2);
}

firstName = 'Thiago';
lastName = 'Tavares';

greet('Xis', 'Lenny');
greet(firstName, lastName);

// função que calcula um valor
function square(number){
    return number * number;
}

console.log(square(7)); // uma função chamando outra função