import { Animal } from './Animal.js';

class Camel extends Animal {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'nom nom';
        this.breed = 'kupranugaris';
        this.avatar = '🐪';
    }
}

export { Camel }