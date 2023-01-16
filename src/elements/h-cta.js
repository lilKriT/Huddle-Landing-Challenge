import { LitElement, css, html } from "lit";

export class HCTA extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      buttonText: { type: String },
    };
  }

  constructor() {
    super();
    this.text = `Ready To Build Your Community?`;
    this.buttonText = "Get Started For Free";
  }

  render() {
    return html`
      <div class="cta">
        <h2>${this.text}</h2>
        <a href="#">${this.buttonText}</a>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .cta {
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 5px rgb(0 0 0 / 0.3);
        border-radius: 12px;
        width: 50%;
        transform: translateY(200px);
        padding: 3rem;
        transition: all 0.3s ease-in-out;
      }

      .cta:hover {
        box-shadow: 0 0 15px rgb(0 0 0 / 0.3);
      }

      h2 {
        font-size: 2rem;
      }

      a {
        text-decoration: none;
        color: white;
        background: var(--pink);
        border-radius: 1000px;
        padding: 1rem 6rem;
        transition: all 0.3s ease-in-out;
      }

      a:hover {
        background: var(--pinkPale);
      }
    `;
  }
}

window.customElements.define("h-cta", HCTA);
