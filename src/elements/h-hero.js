import { LitElement, css, html } from "lit";
// import {
//   LitElement,
//   css,
//   html,
// } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";
import heroImage from "/src/assets/images/illustration-mockups.svg";

export class HHero extends LitElement {
  static get properties() {
    return {
      header: { type: String },
      text: { type: String },
      buttonText: { type: String },
    };
  }

  constructor() {
    super();
    this.header = "Build The Community Your Fans Will Love";
    this.text = `Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
    Create connections with your users as you engage in genuine discussion.`;
    this.buttonText = "Get Started For Free";
  }

  render() {
    return html`<div class="hero">
      <div class="wrapper">
        <div class="content">
          <h2>${this.header}</h2>
          <p>${this.text}</p>
          <a href="#">${this.buttonText}</a>
        </div>
        <img src="${heroImage}" />
      </div>
    </div>`;
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.125rem;
        transition: all var(--animationTime) ease-in-out;
      }

      .hero {
        background: var(--heroBGimage) var(--veryPaleCyan);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        padding: 6rem 0;
        box-shadow: 0 5px 15px rgb(0 0 0 / 0.3);
      }

      .wrapper {
        margin-top: 80px;
        max-width: var(--width);
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .content {
        width: 50%;
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.625rem;
      }

      h2 {
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        font-size: 2rem;
      }

      p {
        font-family: "Poppins", sans-serif;
        color: var(--veryDarkCyan);
      }

      a {
        text-decoration: none;
        color: white;
        background: var(--pink);
        display: inline-block;
        border-radius: 1000px;
        padding: 0.75rem 2.5rem;
        font-size: 0.875rem;
        font-weight: 700;
      }

      a:hover {
        background: var(--pinkPale);
      }

      img {
        width: 50%;
      }

      @media screen and (max-width: 768px) {
        .wrapper {
          flex-direction: column;
        }

        .content {
          width: 80%;
          padding-right: 0rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.625rem;
          text-align: center;
        }
      }
    `;
  }
}

window.customElements.define("h-hero", HHero);
