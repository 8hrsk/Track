class Template {
    constructor(htmlString, cssString) {
        this.id = this.generate(10);
        this.html = this.validateHtml(htmlString);
    }


    /**
     * @description Generate random string
     * @param {number} length 
     * @returns {string}
     */
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

    validateHtml(htmlString) {
        if (typeof htmlString !== 'string') {
            console.error('Invalid html string given');
            return false
        }

        return htmlString
    }

    renderAbsolute() {
        document.body.insertAdjacentHTML('beforeend', this.htmlString);
    }

    renderRelative() {
        return this.html
    }

    setCss(cssString) {
        const css = `
            <style>
                #${this.id} {
                    ${cssString}
                }
            </style>
        `

        document.body.insertAdjacentHTML('beforeend', css);
    }
}