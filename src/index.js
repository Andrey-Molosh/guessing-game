class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessV = Math.ceil((this.min + this.max) / 2);
        return this.guessV;
    }

    lower() {
        this.max = this.guessV;
    }

    greater() {
        this.min = this.guessV;
    }
}

module.exports = GuessingGame;