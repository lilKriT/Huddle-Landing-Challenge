class Shrinker {
  constructor() {
    this.scrollThreshold = 200;
    addEventListener("scroll", () => this.onScroll());
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

  init() {
    console.log("Shrinker Initialized");
  }

  subscribe(s) {
    subscribers.push(s);
    // console.log(subscribers);
  }

  unsubscribe(s) {
    console.log("Unsubbed :(");
    const newSubscribers = subscribers.filter((el) => el != s);
  }
}

const shrinker = new Shrinker();

export default shrinker;
