import { LitElement, css, html } from "lit";
import logo from "/src/assets/images/logo.svg";

export class HFooter extends LitElement {
  static get properties() {
    return {
      header: { type: String },
    };
  }

  constructor() {
    super();
    this.header = "Build The Community Your Fans Will Love";
  }

  render() {
    return html`
      <footer>
        <div className="wrapper">
          <img src="${logo}" />

          <div class="content">
            <div class="footerColumn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua

              <a href="#">+1-543-123-4567</a>
              <a href="#">example@huddle.com</a>
            </div>

            <div class="footerColumn">
              <a href="#">About Us</a>
              <a href="#">What We Do</a>
              <a href="#">FAQ</a>
            </div>

            <div class="footerColumn">
              <a href="#">Career</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>

            <div class="footerColumn">
              <a href="#">+1-543-123-4567</a>
              <a href="#">+1-543-123-4567</a>
              <a href="#">+1-543-123-4567</a>
            </div>
          </div>

          <p class="copyright">
            &copy; Copyright 2018 <a href="#">Huddle</a>. All rights reserved.
          </p>
        </div>
      </footer>
    `;
  }

  static get styles() {
    return css`
      * {
        outline: 1px solid orange;
      }

      footer {
        background-color: var(--veryDarkCyan);
        color: #fff;
        display: flex;
        justify-content: center;
      }

      .wrapper {
        max-width: var(--width);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .content {
        display: flex;
        justify-content: space-between;
        gap: 12px;
      }

      .footerColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-basis: 12%;
        flex-grow: 1;
        gap: 12px;
      }

      .footerColumn:first-of-type {
        flex-grow: 4;
      }

      a {
        text-decoration: none;
        color: var(--veryPaleCyan);
        padding: 2px;
      }

      .copyright {
        font-size: 0.875rem;
        align-self: end;
      }
    `;
  }
}

window.customElements.define("h-footer", HFooter);
