console.log('Hello, World...');

let firstName = 'Thiago'; // string literal
let lastName = undefined; // variável sem valor declarado também é undefined
let age = 35; // number literal (JavaScript não tem int e float)
let isApproved = true; // boolean literal
let selectedNumber = null; // object que limpa o valor da variável
const interestRate = 0.3;

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
console.log(person.name);

let selection = 'phone'; // supondo chave phone determinada no runtime
person['selection'] = '12345';
console.log(person.selection);

// array

let selectedColor = ['red','blue']; // array literal (tipo lista do python)
selectedColor[2] = 1;  // dynamic language
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
    console.log('desenha círculo');
  }
};
firstCircle.draw();

// factory function (função fábrica)

function createCircle(radius, x, y){
  return {
    radius, // se a chave e o valor forem iguais não precisa declarar o valor.
    location: {
      x,
      y
    },
    draw: function(){
      console.log('desenha círculo com raio ' + radius);
    }
  };
}
const secondCircle = createCircle(2, 2, 2);
secondCircle.draw();
const thirdCircle = createCircle(3, 3, 3);
thirdCircle.draw();

// constructor function (função construtora) - prototypal inheritance

function CircleFunctionConstructor(radius, x, y) {
  console.log(this);
  this.radius = radius;
  this.location = {
    x,
    y
  };
  this.draw = function() {
    console.log('desenha círculo com raio ' + radius);
    console.log('desenha círculo com raio ' + this.radius);
  }
}
const forthCircle = new CircleFunctionConstructor(4, 4, 4);
forthCircle.draw();

// função construtora (2015 ECMA update) pseudo-classical inheritance

class CircleClassConstructor {
  constructor(radius, x, y) {
    this.radius = radius;
    this.location = {
      x,
      y
    };
    this.draw = function () {
      console.log(`desenha círculo com raio ${radius}`);
      console.log(`desenha círculo com raio ${this.radius}`);
    };
  }
}
const fifthCircle = new CircleClassConstructor(5, 5, 5);
fifthCircle.draw();

// constructor properties

console.log(forthCircle.constructor); // retorna a fuction CircleFunctionConstructor
console.log(fifthCircle.constructor); // retorna a class CircleClassConstructor
console.log(firstCircle.constructor); // retorna a built-in function Object()
console.log(secondCircle.constructor); // retorna a built-in function Object()

// funções são objetos em Java Script

console.log(CircleFunctionConstructor.name);
console.log(CircleFunctionConstructor.length);
console.log(CircleFunctionConstructor.constructor); // retorna a built-in function Function()

// os parâmetros da função podem ser declarados como strings com '', "" ou ``.
// `` é utilizado quando se deseja utilizar múltiplas linhas.
const CircleFunctionConstructorForReal = new Function('radius', 'x', 'y', `
this.radius = radius;
this.location = {
  x,
  y
};
this.draw = function() {
  console.log('desenha círculo com raio ' + radius);
  console.log('desenha círculo com raio ' + this.radius);
}
`);

const forthCircleForReal1 = new CircleFunctionConstructorForReal(4, 0, 0);
forthCircleForReal1.draw();

// métodos da built-in function Function()

CircleFunctionConstructorForReal.call({}, 6, 6, 6);
CircleFunctionConstructorForReal.apply({}, [7, 7, 7]);

// primitive/value types e reference types (objects)

let a = 10;
let b = a;
a = 20;
console.log(a, b); // primitivos são copiados por valores

let c = {value: 10};
let d = c;
c.value = 20;
console.log(c, d); // objetos são copiados por referência

//exemplo no manuseio de primitivos
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);

// exemplo no manuseio de objetos
let object = {value: 10};
function increase(object) {
  object.value++;
}
increase(object);
console.log(object);

// adding/removing properties

fifthCircle.perimeter = 2*3.1*5; // dot notation
fifthCircle['perimeter'] = 2*3.1*5; // bracket notation
console.log(fifthCircle);

// delete fifthCircle.perimeter;
// delete fifthCircle['perimeter'];

// enumerating properties and/or methods

for (let key in fifthCircle) {
  if (typeof[key] !== 'function') // filtra apenas propriedades
    console.log(key, fifthCircle[key]);
}

const keys = Object.keys(fifthCircle);
console.log(keys);

if ('radius' in fifthCircle)
  console.log('fifthCircle has a radius.');

// Abstraction - hide the details and show the essentials

function CircleFunctionConstructorAbs(radius, x, y) {
  this.radius = radius;
  this.location = { x, y };
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function() {
    // code here
  };
  this.draw = function() {
    computeOptimumLocation();
    console.log('desenha círculo com raio ' + radius);
  };
}
const sixthCircle = new CircleFunctionConstructorAbs(6, 6, 6);
console.log(sixthCircle);

// getters/setters

function CircleFunctionConstructorGetSet(radius, x, y) {
  this.radius = radius;
  this.location = { x, y };
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function() {
    console.log('desenha círculo com raio ' + radius);
  };
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) // se definir errado, apresenta este erro
        throw new Error('Invalid Location.'); // built-in constructor Error
      defaultLocation = value;
    }
  });
}
const seventhCircle = new CircleFunctionConstructorGetSet(7, 7, 7);
console.log(seventhCircle);
console.log(seventhCircle.getDefaultLocation()); // não é legal chamar como método
console.log(seventhCircle.defaultLocation); // getter
seventhCircle.defaultLocation = { x: 1, y: 1 }; // setter
console.log(seventhCircle.defaultLocation);

// Exercício - Stopwatch

function Stopwatch() {
    
  let startTime, endTime, running, duration = 0;
   
  this.start = function() {
    if (running)
      throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date(); // milisegundos
    };

  this.stop = function() {
    if (!running)
      throw new Error('Stopwatch is not started.');
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });

}
