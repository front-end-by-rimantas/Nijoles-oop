class Cat {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.color = spalva;
    }

    speek() {
        return `${this.name} (kaciukas) pasake miau.`;
    }

    introduce() {
        console.log(`As esu ${this.name}, ${this.color} spalvos katinas 🐱`);
    }
}

export { Cat }