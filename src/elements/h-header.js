import { LitElement, css, html } from "lit";

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
    return html` <header>Header text: ${this.text}</header> `;
  }
}

window.customElements.define("h-header", HHeader);
