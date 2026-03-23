import { HomePage } from '../../../home/home-wc';
import { Footer } from '../footer-wc/footer';

export class App extends HTMLElement {
    static #selector = 'app-root';
    static render() {
        customElements.define(App.#selector, App);
        HomePage.render();
        Footer.render();
    }

    #template!: string;

    constructor() {
        super();
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate() {
        this.#template = /*HTML*/ `
            <main>
                <app-footer></app-footer>
            </main>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
