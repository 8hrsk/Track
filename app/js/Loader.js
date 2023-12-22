class Loader {
    constructor() {
        this.loader = document.createElement('span');
        this.loader.classList.add('loader');
        this.loader.style.display = 'none';
        document.body.appendChild(this.loader);
    }

    show() {
        this.loader.style.display = 'inline-block';
    }

    hide() {
        this.loader.style.display = 'none';
    }
}