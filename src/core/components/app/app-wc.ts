import { Counter } from '../counter/counter';
import { Footer } from '../footer-wc/footer';

export class App extends HTMLElement {
    static #selector = 'app-root';
    static render() {
        customElements.define(App.#selector, App);
        Footer.render();
        Counter.render();
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
                <app-counter counterId="01"></app-counter>
                <app-counter counterId="02"></app-counter>
            </main>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
