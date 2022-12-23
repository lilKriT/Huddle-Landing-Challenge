import { LitElement, css, html } from "lit";
// import litLogo from './assets/lit.svg'
// import bgDesktop from "../assets/images/bg-hero-desktop.svg";

export class HHero extends LitElement {
  static get properties() {
    return {
      header: { type: String },
      text: { type: String },
      buttonText: { type: String },
    };
  }

  constructor() {
    super();
    this.header = "Build The Community Your Fans Will Love";
    this.text = `Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
    Create connections with your users as you engage in genuine discussion.`;
    this.buttonText = "Get Started For Free";
  }

  render() {
    return html`<div class="hero">
      <h2>${this.header}</h2>
      <p>${this.text}</p>
      <a href="#">${this.buttonText}</a>
    </div>`;
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .hero {
        min-height: 100vh;
        outline: 1px solid red;
      }
    `;
  }
}

window.customElements.define("h-hero", HHero);
