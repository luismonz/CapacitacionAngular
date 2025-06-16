const saludar = require('./test')
const calculadora = require('./calculator');
const People = require('./people');

console.log(saludar('JORGE'))
console.log(calculadora.sumar(3, 5))

const jorge = new People('JORGE', 23);
console.log(jorge.greet());

