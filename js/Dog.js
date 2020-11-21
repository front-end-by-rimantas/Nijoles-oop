class Dog {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.color = spalva;
    }

    speek() {
        return `${this.name} (suniukas) pasake au au.`;
    }

    introduce() {
        console.log(`As esu ${this.name}, ${this.color} spalvos suniukas 🐕`);
    }
}

export { Dog }