import { LitElement, css, html } from "lit";
import { HBlurb } from "./h-blurb";

export class HMain extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = `Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
    Create connections with your users as you engage in genuine discussion.`;
  }

  render() {
    return html`<div class="mainContent">
      <slot></slot>
    </div>`;
  }

  static get styles() {
    return css`
      :host {
        outline: 1px solid red;
        display: block;
      }

      .mainContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8.875rem 0;
      }

      h-blurb {
        background: red !important;
      }
    `;
  }
}

window.customElements.define("h-main", HMain);
