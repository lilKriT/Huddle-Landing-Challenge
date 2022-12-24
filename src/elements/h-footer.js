import { LitElement, css, html } from "lit";

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
    return html`<h2>Footer here</h2>`;
  }

  static get styles() {
    return css``;
  }
}

window.customElements.define("h-footer", HFooter);
