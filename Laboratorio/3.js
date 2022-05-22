class Contenido extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>Hola</h1>

        `
    }
}

window.customElements.define("contenido-index", Contenido);