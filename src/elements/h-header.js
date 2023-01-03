import { LitElement, css, html } from "lit";
import logo from "/src/assets/images/logo.svg";

export class HHeader extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      shrunk: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.text = "Header goes here";
    this.shrunk = false;
  }

  render() {
    return html`<header>
      <nav class="shrinkOnScroll">
        <a href="#" class="logo"> <img src="${logo}" /></a>
        <a href="#" class="navLink">Try It Free</a>
      </nav>
    </header> `;
  }

  static get styles() {
    return css`
      header {
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: center;
        box-shadow: 0 5px 10px rgb(0 0 0 / 0.1);
        backdrop-filter: blur(3px);
      }

      nav {
        margin: 2.875rem auto 1.375rem;
        max-width: var(--width);
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Open Sans", sans-serif;
      }

      .shrunk {
        margin: 0.875rem auto 0.375rem;
      }

      .logo {
        transition: all 0.3s ease-in-out;
      }

      .logo:hover {
        transform: scale(1.05);
      }

      .navLink {
        text-decoration: none;
        display: inline-block;
        background: white;
        padding: 12px 20px;
        border-radius: 100px;
        color: var(--veryDarkCyan);
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        box-shadow: 0 0 15px rgb(0 0 0 / 0.2);
        transition: all 0.3s ease-in-out;
      }

      .navLink:hover {
        color: var(--grayishBlue);
        box-shadow: 0 0 15px rgb(0 0 0 / 0.4);
      }
    `;
  }
}

window.customElements.define("h-header", HHeader);
