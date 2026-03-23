import { Counter } from '../core/components/counter/counter';

export class HomePage extends HTMLElement {
    static #selector = 'home-page';

    static render() {
        const el: HTMLElement | null = document.querySelector('main');
        if (el === null) {
            throw new Error('Selector main no disponible');
        }
        el.innerHTML = `<${this.#selector}></${this.#selector}>`;
        customElements.define(HomePage.#selector, HomePage);
        Counter.render();
    }

    #template!: string;

    constructor() {
        super();
        this.#setTemplate();
        this.#setElement();
    }

    #setTemplate() {
        this.#template = /* HTML */ `
            <app-counter counterId="01"></app-counter>
            <app-counter counterId="02"></app-counter>
        `;
    }

    #setElement() {
        this.innerHTML = this.#template;
    }
}
