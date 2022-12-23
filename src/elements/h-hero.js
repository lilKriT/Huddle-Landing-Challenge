import { LitElement, css, html } from "lit";
// import litLogo from './assets/lit.svg'
// import bgDesktop from "../assets/images/bg-hero-desktop.svg";

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
    return html` <div>Header text: ${this.text}</div> `;
  }

  static get styles() {
    return css`
      div {
        background: red;
      }
    `;
  }
}

window.customElements.define("h-hero", HHero);
