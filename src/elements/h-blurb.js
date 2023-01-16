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
    this.isOdd = false;
    this.classes = { blurb: true, odd: true, fadein: true, slidein: true };
  }

  firstUpdated() {
    const faders = this.shadowRoot.querySelectorAll(".fadein");
    const appearOptions = {
      threshold: 1,
      rootMargin: "0px 0px 100px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }

  render() {
    this.classes = {
      blurb: true,
      odd: this.isOdd,
      fadein: true,
      slidein: true,
    };
    return html`<div class=${classMap(this.classes)}>
      <div class="blurbContent">
        <h2>${this.heading}</h2>
        <p>${this.para}</p>
      </div>
      <div class="blurbImage">
        <slot name="image"></slot>
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

      .slidein {
        transform: translateX(10%);
      }

      .slidein.odd {
        transform: translateX(-10%);
      }

      .slidein.appear {
        transform: translateX(0);
      }

      .fadein {
        opacity: 0;
        transition: opacity 0.3s ease-in transform 0.3s ease-in;
      }

      .fadein.appear {
        opacity: 1;
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

      h2 {
        font-size: 2rem;
      }

      p {
        color: var(--grayishBlue);
      }

      .blurbImage {
        width: 50%;
        object-fit: none;
        padding-left: 100px;
      }

      .blurbImage ::slotted(img) {
        width: 100%;
        object-fit: cover;
      }
    `;
  }
}

window.customElements.define("h-blurb", HBlurb);
