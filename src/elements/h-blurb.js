import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";

export class HBlurb extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      para: { type: String },
      img: { type: String },
      imgAlt: { type: String },
      isOdd: { type: Boolean },
      classes: {},
    };
  }

  constructor() {
    super();
    this.heading = "This is heading";
    this.para = "Lorem Ipsum";
    this.img = "";
    this.imgAlt = "Alternative Text";
    this.isOdd = false;
    this.classes = { blurb: true, odd: true };
  }

  render() {
    this.classes = { blurb: true, odd: this.isOdd };
    return html`<div class=${classMap(this.classes)}>
      <div class="blurbContent">
        <h2>${this.heading}</h2>
        <p>${this.para}</p>
      </div>
      <div class="blurbImage">
        <img src="${this.img}" alt="${this.imgAlt}" />
      </div>
    </div> `;
  }

  static get styles() {
    return css`
      .blurb {
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0 0 5px rgb(0 0 0 / 0.3);
        border-radius: 12px;
        margin-bottom: 3rem;
        padding: 2rem 1rem;
        max-width: var(--width);
        transition: all 0.3s ease-in-out;
      }

      .blurb:hover {
        box-shadow: 0 0 15px rgb(0 0 0 / 0.3);
      }

      .odd {
        flex-direction: row-reverse;
      }

      .blurbContent {
        width: 50%;
        padding-left: 100px;
      }

      .blurbImage {
        width: 50%;
        object-fit: none;
        padding-left: 100px;
      }

      .blurbImage img {
        width: 100%;
        object-fit: cover;
      }
    `;
  }
}

window.customElements.define("h-blurb", HBlurb);
