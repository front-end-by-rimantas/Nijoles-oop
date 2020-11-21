import { Cat } from './Cat.js';
import { Dog } from './Dog.js';
import { Button } from './Button.js'

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



const btn1 = new Button('labas', '#btn1');
const btn2 = new Button('rytas');
const btn3 = new Button('Lietuva');
