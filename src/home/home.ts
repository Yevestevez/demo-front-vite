import { Counter } from '../core/components/counter/counter';

export class HomePage {
    static #selector = 'home-page';

    static render() {
        const el = document.querySelector('main') as HTMLElement;
        const home = new HomePage();
        el.innerHTML = home.#element;
        Counter.render();
    }

    #template!: string;
    #element!: HTMLElement;

    private constructor() {
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
        this.#element = document.createElement('home');
        this.#element.innerHTML = this.#template;
    }
}
