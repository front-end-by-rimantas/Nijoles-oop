import { Cat } from './Cat.js';
import { Dog } from './Dog.js';

/*
Sukurti kaciuka.
Sukurti suniuka.

Rainis (kaciukas) pasake miua.
Rexas (suniukas) pasake au au.
*/

const rainis = new Cat('Rainis', 'pilkas');
const garfildas = new Cat('Garfildas', 'rudas');
const pukis = new Cat('Pukis', 'baltas');

console.log(rainis);
console.log(garfildas);
console.log(pukis);

console.log(rainis.speek());
console.log(garfildas.speek());
console.log(pukis.speek());

rainis.introduce();
garfildas.introduce();
pukis.introduce();


console.log('-----------');

const rexas = new Dog('Rexas', 'grazios');

console.log(rexas.speek());

rexas.introduce();