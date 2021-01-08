class Animal {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.color = spalva;
        this.sound = 'au miau nom';
        this.breed = 'gyvunas';
        this.avatar = '🎈';
    }

    speek() {
        return `${this.name} (${this.breed}) pasake ${this.sound}.`;
    }

    introduce() {
        console.log(`As esu ${this.name}, ${this.color} spalvos ${this.breed} ${this.avatar}`);
    }
}

export { Animal }