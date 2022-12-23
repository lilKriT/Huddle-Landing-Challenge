import { LitElement, css, html } from "lit";

export class HHero extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = "Hero goes here";
  }

  render() {
    return html` <header>Header text: ${this.text}</header> `;
  }
}

window.customElements.define("h-hero", HHero);
