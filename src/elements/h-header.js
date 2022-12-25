import { LitElement, css, html } from "lit";
// import { LitElement, css, html } from "/node_modules/.vite/deps/lit";
// import { LitElement, css, html } from "https://unpkg.com/lit?module";
// import { LitElement, css, html } from "../../node_modules/.vite/deps/lit";

export class HHeader extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = "Header goes here";
  }

  render() {
    return html`<header>Header text: ${this.text}</header> `;
  }

  static get styles() {
    return css`
      header {
        background: yellow;
      }
    `;
  }
}

window.customElements.define("h-header", HHeader);
