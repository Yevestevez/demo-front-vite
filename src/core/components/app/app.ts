import { HomePage } from '../../../home/home';
import { Footer } from '../footer-wc/footer';

export class App {
    static #selector = 'app-root';
    static render() {
        const el = document.querySelector(App.#selector) as HTMLElement;
        const app = new App();
        el.replaceWith(app.#element);
        HomePage.render();
        Footer.render();
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
            </main>
        `;
    }

    #setElement() {
        this.#element = document.createElement('app-root');
        console.log(this.#element);
        this.#element.innerHTML = this.#template;
    }
}
