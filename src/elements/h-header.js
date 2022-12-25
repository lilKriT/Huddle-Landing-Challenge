import { LitElement, css, html } from "lit";
// import { LitElement, css, html } from "/node_modules/.vite/deps/lit";
// import { LitElement, css, html } from "https://unpkg.com/lit?module";
// import { LitElement, css, html } from "../../node_modules/.vite/deps/lit";
import logo from "/src/assets/images/logo.svg";

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
    return html`<header>
      <nav>
        <img src="${logo}" />
        <a href="#">Try It Free</a>
      </nav>
    </header> `;
  }

  static get styles() {
    return css`
      header {
        background: yellow;
        display: flex;
        justify-content: center;
      }

      nav {
        max-width: var(--width);
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      a {
        text-decoration: none;
        display: inline-block;
        background: white;
        padding: 12px 20px;
        border-radius: 100px;
      }
    `;
  }
}

window.customElements.define("h-header", HHeader);
