let firstName = 'Thiago'; // string literal
let lastName = undefined; // variável sem valor declarado também é undefined
let age = 35; // number literal (JavaScript não tem int e float)
let isApproved = true; // boolean literal
let selectedNumber = null; // object que limpa o valor da variável
const interestRate = 0.3;

console.log('Hello, World...');
console.log(firstName, lastName);
console.log(interestRate);

// linguagem dinâmica

console.log(typeof firstName); // string
firstName = 1;
console.log(typeof firstName); // number
console.log(typeof selectedNumber); // object

// objeto literal (tipo dicionário do python)

let person = {
  name: 'Xis',
  address: 'Balneário Dospaunocú'
};
console.log(person);

person.name = 'Xis2hi'; // dot notation
console.log(person.name);

person['name'] = 'Xisnothi'; // bracket notation
let selection = 'name';
person[selection] = 'Xisnothi';
console.log(person.name);

// array

let selectedColor = ['red','blue']; // array literal (tipo lista do python)
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

// objeto literal

const firstCircle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function(){
    console.log('desenhar');
  }
};
firstCircle.draw();

// factory function (fábrica)

function createCircle(radius, x, y){
  return {
    radius, // se a chave e o valor forem iguais não precisa declarar o valor.
    location: {
      x,
      y
    },
    draw: function(){
      console.log('desenhar');
    }
  };
}
const secondCircle = createCircle(1, 1, 1);
secondCircle.draw();
const thirdCircle = createCircle(2, 0, 0);
thirdCircle.draw();

// constructor function (construtor)

function CircleConstructor(radius, x, y) {
  console.log('this', this);
  this.radius = radius;
  this.location = {
    x,
    y
  },
  this.draw = function() {
    console.log('desenhar');
  }
}
const forthCircle = new CircleConstructor(1, 2, 4);
forthCircle.draw();