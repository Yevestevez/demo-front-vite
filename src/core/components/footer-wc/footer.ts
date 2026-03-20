import { socials } from '../../data/socials';
import './footer.css';

export class Footer extends HTMLElement {
    static selector = 'app-footer';
    static render() {
        customElements.define(Footer.selector, Footer);
    }

    #address = '&copy; 2026 CFD Alcobendas - Curso IF2001';
    #list!: string;
    #template!: string;

    constructor(address?: string) {
        super();
        this.#address = address ?? this.#address;

        this.setTemplate();

        console.log('footer loaded');
    }

    #setList(): void {
        this.#list = socials
            .map(
                (item) => `
        <li><a href="${item.url}" target="_blank">
         ${item.icon}</a></li>`,
            )
            .join('');
    }

    setTemplate(): void {
        this.#setList();
        this.#template = ` 
        <footer class="footer">
            <ul>${this.#list}</ul>
            <address>${this.#address}</address>
        </footer>
    `;
        this.innerHTML = this.#template;
    }
}
