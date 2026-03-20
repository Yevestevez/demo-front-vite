interface Props {
    counterId: string;
    parent: HTMLElement;
}

export class Counter {
    static selector = 'app-counter';

    static render() {
        document
            .querySelectorAll<HTMLElement>(Counter.selector)
            .forEach((el) => {
                const customElement = el as HTMLElement & { counterId: string };
                const props: Props = {
                    counterId: customElement.attributes.getNamedItem(
                        'counterId',
                    )?.value as string,
                    parent: el,
                };
                const counter = new Counter(props);
                el.appendChild(counter.element);
            });
    }

    template!: string;
    element!: HTMLElement;
    parentElement: HTMLElement;
    counter = 0;
    props: Props;

    constructor(props: Props) {
        this.parentElement = props.parent;
        this.props = props;
        this.setTemplate();
        this.setElement();
    }

    setTemplate(): void {
        this.template = /*HTML*/ `
            <div class="counter">
                <h3>Counter - ${this.props.counterId}</h3>
                <button>Click: ${this.counter}</button>
            </div>
        `;
    }
    setElement(): void {
        this.parentElement.innerHTML = this.template;
        this.element = this.parentElement.firstElementChild as HTMLElement;

        this.element.querySelector('button')?.addEventListener('click', () => {
            this.counter++;
            console.log(this.counter);
            this.setTemplate();
            this.setElement();
        });
    }
}
