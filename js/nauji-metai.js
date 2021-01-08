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




/*

Animal.js (params: name, color, sound; methods: voice(), introduce();)
    Pet.js (viska paveldi is Animal.js)
        Dog.js (viska paveldi is Pet.js)
        Cat.js (viska paveldi is Pet.js)
        Hamster.js (viska paveldi is Pet.js; params: canEatTillDeath)

    Bird.js (viska paveldi is Animal.js; params: wingsCount, canFly; methods: flyAway();)
        Chicken.js (viska paveldi is Bird.js)
        Parrot.js (viska paveldi is Bird.js)
        Eagle.js (viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js; params: imposter=true;)

    Fish.js (viska paveldi is Animal.js; params: canSwim; methods: swimAway();)
        Goldfish.js (viska paveldi is Fish.js; params: grantsWishes; methods: makeWish();)
        Nemo.js (viska paveldi is Fish.js)

*/