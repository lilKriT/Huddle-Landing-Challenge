import { throttle } from "lodash";

class Shrinker {
  constructor() {
    this.scrollThreshold = 200;
    addEventListener(
      "scroll",
      throttle(() => this.onScroll(), 100)
    );
  }

  onScroll() {
    let fromTop = Math.round(window.scrollY);

    if (fromTop > this.scrollThreshold) {
      const scrolledShrink = new CustomEvent("scrolledShrink", {
        detail: {
          pixels: fromTop,
        },
        bubbles: true,
      });

      dispatchEvent(scrolledShrink);
    } else {
      const scrolledGrow = new CustomEvent("scrolledGrow", {
        detail: {
          pixels: fromTop,
        },
        bubbles: true,
      });

      dispatchEvent(scrolledGrow);
    }
  }
}

const shrinker = new Shrinker();

export default shrinker;
