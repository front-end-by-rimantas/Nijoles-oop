import { Animal } from './Animal.js';

class Dog extends Animal {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'au au';
        this.breed = 'suniukas';
        this.avatar = '🐕';
    }
}

export { Dog }