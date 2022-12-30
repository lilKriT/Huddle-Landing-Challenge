import { LitElement, css, html } from "lit";

export class HBlurb extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      para: { type: String },
      img: { type: String },
      imgAlt: { type: String },
    };
  }

  constructor() {
    super();
    this.heading = "This is heading";
    this.para = "Lorem Ipsum";
    this.img = "";
    this.imgAlt = "Alternative Text";
  }

  render() {
    return html`<div class="blurb">
      <div class="blurbContent">
        <h2>${this.heading}</h2>
        <p>${this.para}</p>
      </div>
      <img src="${this.img}" alt="${this.imgAlt}" />
    </div> `;
  }

  static get styles() {
    return css`
      .blurb {
        background: gray;
      }

      .bluarb {
        display: flex;
      }
    `;
  }
}

window.customElements.define("h-blurb", HBlurb);
