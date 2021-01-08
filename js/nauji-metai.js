import { Cat } from './Cat.js';
import { Dog } from './Dog.js';
import { Camel } from './Camel.js';

const suo = new Dog('Rexas', 'brown');
const kate = new Cat('Pukis', 'white');
const kuprius = new Camel('Achemed', 'yellow');


console.log(kuprius.speek());
kuprius.introduce();

console.log(kate.speek());
kate.introduce();

console.log(suo.speek());
suo.introduce();