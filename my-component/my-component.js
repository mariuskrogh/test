import { cssStyle } from './my-component-css.js';
import { HTML } from './my-component-html.js';

export default class MyComponent extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'open' });
        this.$dom = {
            trueButton: null,
            falseButton: null,
            container: null
        };
    }

    connectedCallback() {
        this._root.innerHTML = HTML + cssStyle;
        this.$dom.trueButton = this._root.querySelector("#true-button");
        this.$dom.falseButton = this._root.querySelector("#false-button");
        this.$dom.container = this._root.querySelector("ul");
        if (this.hasAttribute('state')) {
            this._setValueOnDOM(this.getAttribute('state'));
        }
        this._attachEvents();
    }

    disconnectedCallback() {
        console.log("element removed from page");
        this.state = null;
    }

    static get observedAttributes() {
        return ['state'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'state' && newValue !== oldValue) {
            this._setValueOnDOM(newValue);
            if (this.$dom.container) {
                this.dispatchEvent(this._createChangeEvent());
            }
        }
    }

    _createChangeEvent() {
        return new CustomEvent("change-state", {
            bubbles: true,
            cancelable: false,
            detail: {
                'state': this.state
            }
        });
    }

    get state() {
        return this.getAttribute('state');
    }

    set state(value) {
        this.setAttribute('state', value);
    }

    _setValueOnDOM(value) {
        if (this.$dom.container)
            this.$dom.container.setAttribute("value", value);
    }


    _attachEvents() {
        if (this.$dom.trueButton) {
            this.$dom.trueButton.addEventListener("click", () => {
                this.state === "true" ? this.state = "" : this.state = "true";

            });
        }
        if (this.$dom.falseButton) {
            this.$dom.falseButton.addEventListener("click", () => {
                this.state === "false" ? this.state = "" : this.state = "false";
            });
        }

    }



}
customElements.define('my-component', MyComponent);