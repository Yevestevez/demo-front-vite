import { Counter } from '../counter/counter';
import { Footer } from '../footer-wc/footer';

export class App {
    static #selector = 'app-root';
    static render() {
        const el = document.querySelector(App.#selector) as HTMLElement;
        const app = new App();
        el.replaceWith(app.#element);
        Footer.render();
        Counter.render();
    }

    #template!: string;
    #element!: HTMLElement;

    private constructor() {
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
        this.#element = document.createElement('app-root');
        console.log(this.#element);
        this.#element.innerHTML = this.#template;
    }
}
