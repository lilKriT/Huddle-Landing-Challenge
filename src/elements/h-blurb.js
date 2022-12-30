import { LitElement, css, html } from "lit";

export class HBlurb extends LitElement {
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
    return html`<div>blurb here</div> `;
  }

  static get styles() {
    return css``;
  }
}

window.customElements.define("h-blurb", HBlurb);
