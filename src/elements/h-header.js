import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import logo from "/src/assets/images/logo.svg";

export class HHeader extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      shrunk: { type: Boolean },
      classes: {},
    };
  }

  constructor() {
    super();
    this.text = "Header goes here";
    this.shrunk = false;
    this.classes = { shrinkOnScroll: true, shrunk: false };
  }

  render() {
    this.classes = { shrinkOnScroll: true, shrunk: false };
    return html`<header>
      <nav class=${classMap(this.classes)}>
        <a href="#" class="logo"> <img src="${logo}" /></a>
        <a href="#" class="navLink">Try It Free</a>
      </nav>
    </header> `;
  }

  connectedCallback() {
    super.connectedCallback();

    addEventListener("scrolledShrink", (this.shrinkRef = (e) => this.shrink()));
    addEventListener("scrolledGrow", (this.growRef = (e) => this.grow()));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    removeEventListener("scrolledShrink", this.shrinkRef);
    removeEventListener("scrolledGrow", this.growRef);
  }

  shrink() {
    this.shadowRoot.querySelector("header").classList.add("shrunk");
  }

  grow() {
    this.shadowRoot.querySelector("header").classList.remove("shrunk");
  }

  static get styles() {
    return css`
      header {
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 10;
      }

      header.shrunk {
        backdrop-filter: blur(5px);
        box-shadow: 0 5px 10px rgb(0 0 0 / 0.1);
        background: rgb(255 255 255 / 0.3);
      }

      nav {
        max-width: var(--width);
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Open Sans", sans-serif;
      }

      .shrinkOnScroll {
        margin: 2.875rem auto 1.375rem;
        transition: all 0.3s ease;
      }

      .shrunk .shrinkOnScroll {
        margin: 0.625rem auto 0.625rem;
      }

      .logo {
        transition: all 0.3s ease-in-out;
        width: clamp(10rem, 20%, 15rem);
      }

      .logo img {
        width: 100%;
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
