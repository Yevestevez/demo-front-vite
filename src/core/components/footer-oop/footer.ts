import { socials } from '../../data/socials';
import './footer.css';

export class Footer {
    // Propiedades y métodos estáticos
    static selector = 'app-footer';
    static render() {
        document.querySelectorAll(Footer.selector).forEach((el) => {
            const footer = new Footer();
            el.appendChild(footer.element);
        });
    }

    // Propiedades, setters/getters, constructor y métodos de instancia
    address = '&copy; 2026 CFD Alcobendas - Curso IF2001';
    list: string;
    template!: string;
    element!: HTMLElement;

    constructor(address?: string) {
        this.address = address ?? this.address;
        this.list = socials
            .map(
                (item) => `
        <li><a href="${item.url}" target="_blank">
         ${item.icon}</a></li>`,
            )
            .join('');

        this.setTemplate();
        this.setElement();

        console.log('footer loaded');
    }

    setTemplate(): void {
        this.template = /*html*/ ` 
        <footer class="footer">
            <ul>${this.list}</ul>
            <address>${this.address}</address>
        </footer>
    `;
    }

    setElement(): void {
        const parentElement = document.createElement('parent');
        parentElement.innerHTML = this.template;
        const element = parentElement.firstElementChild;
        this.element = element as HTMLElement;
    }
}
