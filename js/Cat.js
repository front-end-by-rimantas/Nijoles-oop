import { Animal } from './Animal.js';

class Cat extends Animal {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'miau miau';
        this.breed = 'katinas';
        this.avatar = '🐱';
    }
}

export { Cat }