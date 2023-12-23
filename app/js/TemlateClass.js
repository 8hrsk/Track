class Template {
    constructor() {
        this.id = 'template' + this.generate(10);
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

    validate(string) {
        if (typeof string !== 'string') {
            console.error('Invalid data string given : ', string);
            return false
        }

        return string
    }

    /**
     * @description Set css to element
     * @param {string} css 
     */
    setCss() {
        const css = `
            <style>
                ${this.css}
            </style>
        `

        document.body.insertAdjacentHTML('beforeend', css);
    }

    setJs() {
        const js = `
            <script>
                ${this.js}
            </script>
        `

        return js
    }

    create({ html }, { css }, { js }) {
        this.html = this.validate(html);
        this.css = this.validate(css);
        this.js = this.validate(js);
        // this.setJs(this.js);
        this.setCss(this.css)
    }

    renderAbsolute() {
        document.body.insertAdjacentHTML('beforeend', this.html);
        const script = document.createElement('script');
        script.innerHTML = this.js;
        document.getElementById(this.id).appendChild(script);
    }
    
    async rendered() {
        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        let element = null;

        while (element === null) {
            element = document.getElementById(this.id);
            await sleep(15)
        }

        const script = document.createElement('script');
        script.innerHTML = this.js;

        element.appendChild(script);
    }

    use() {
        this.rendered()
        return this.html
    }

    isRendered() {
        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        let element = null;

        while (element === null) {
            element = document.getElementById(this.id);
            sleep(15)
        }

        return true
    }
}