import { LitElement, css, html } from "lit";

export class HBlurb extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      para: { type: String },
      img: { type: String },
      imgAlt: { type: String },
      isOdd: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.heading = "This is heading";
    this.para = "Lorem Ipsum";
    this.img = "";
    this.imgAlt = "Alternative Text";
    this.isOdd = false;
  }

  render() {
    return html`<div class="blurb">
      <div class="blurbContent">
        <h2>${this.heading}</h2>
        <p>${this.para}</p>
        ${this.isOdd ? "this is odd" : "not odd"}
      </div>
      <img src="${this.img}" alt="${this.imgAlt}" />
    </div> `;
  }

  static get styles() {
    return css`
      :host:nth-child(odd) {
        background: blue;
      }

      .blurb {
        display: flex;
        align-items: center;
        box-shadow: 0 0 5px rgb(0 0 0 / 0.3);
        border-radius: 12px;
        padding: 0 0 0 100px;
      }

      .blurbContent {
        width: 50%;
      }

      img {
        width: 50%;
      }
    `;
  }
}

window.customElements.define("h-blurb", HBlurb);
