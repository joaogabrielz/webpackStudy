import soma from './calc.js';
import Heading from './components/heading.js'

console.log("Testing webpack 2!!");

soma(2, 4);
soma(5,4);

//Loaders

const heading = new Heading();

heading.create("Titulo dinamico")
heading.create("Hot reload :))")