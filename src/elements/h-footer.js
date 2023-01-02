import { LitElement, css, html } from "lit";

import logoWhite from "/src/assets/images/logo-white.svg";
import pinImg from "/src/assets/images/icon-location.svg";
import emailImg from "/src/assets/images/icon-email.svg";
import phoneImg from "/src/assets/images/icon-phone.svg";

import facebookIcon from "/src/assets/icons/facebook-f.svg";
import twitterIcon from "/src/assets/icons/twitter.svg";
import instagramIcon from "/src/assets/icons/instagram.svg";

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
        <div class="wrapper">
          <a href="#" class="logo"><img src="${logoWhite}" /></a>

          <div class="content">
            <div class="footerColumn">
              <span>
                <img src="${pinImg}" alt="" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </span>

              <a href="#"><img src="${phoneImg}" alt="" />+1-543-123-4567</a>
              <a href="#"><img src="${emailImg}" alt="" />example@huddle.com</a>
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

            <div class="footerColumn socialColumn">
              <a href="#" class="socialIcon"
                ><img src="${facebookIcon}" alt=""
              /></a>
              <a href="#" class="socialIcon"
                ><img src="${twitterIcon}" alt=""
              /></a>
              <a href="#" class="socialIcon"
                ><img src="${instagramIcon}" alt=""
              /></a>
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
      footer {
        background-color: var(--veryDarkCyan);
        color: #fff;
        display: flex;
        justify-content: center;
        padding: 150px 0 0;
      }

      .wrapper {
        max-width: var(--width);
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
      }

      .logo {
        align-self: start;
        transition: all 0.3s ease-in-out;
      }

      .logo:hover {
        transform: scale(1.05);
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

      .footerColumn:first-child > * {
        display: flex;
        gap: 16px;
        align-items: flex-start;
      }

      .footerColumn:first-of-type {
        flex-grow: 4;
      }

      a {
        text-decoration: none;
        color: var(--veryPaleCyan);
        padding: 2px;
        position: relative;
      }
      a:hover::after {
        content: "";
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
      }

      .socialColumn {
        display: flex;
        flex-direction: row;
      }

      .socialIcon {
        display: flex;
        justify-content: center;
        width: 32px;
        padding: 1px;
        aspect-ratio: 1;
        border: 1px solid white;
        border-radius: 50%;
      }

      .copyright {
        font-size: 0.875rem;
        align-self: end;
      }
    `;
  }
}

window.customElements.define("h-footer", HFooter);
