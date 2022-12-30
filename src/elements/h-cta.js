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
        width: 100%;
      }

      .cta {
        background: gray;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 10px rgb(0 0 0 / 0.3);
        border-radius: 12px;
      }

      a {
        text-decoration: none;
        color: white;
        background: var(--pink);
        border-radius: 1000px;
      }
    `;
  }
}

window.customElements.define("h-cta", HCTA);
