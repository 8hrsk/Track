class Timer {
    constructor() {
        this.id = this.generate()
    }

    generate(length) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

        const getRandom = (string) => {
            return string[Math.floor(Math.random() * string.length)];
        }

        let generatorResult = '';

        for (let generatorStep = 0; generatorStep <= length; generatorStep++) {
            generatorResult += getRandom(alphabet);
        }

        return generatorResult
    }

    create({name, date}) {
        this.name = name
        this.date = date
    }
}

module.exports = Timer