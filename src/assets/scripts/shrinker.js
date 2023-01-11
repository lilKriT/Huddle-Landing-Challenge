const subscribers = [];

class Shrinker {
  constructor() {
    console.log("Created shrinker");
    addEventListener("scroll", this.onScroll);

    const scrolledGrow = new CustomEvent("scrolledGrow", {
      detail: {
        name: "cat",
      },
    });
  }

  onScroll() {
    let fromTop = Math.round(window.scrollY);

    if (fromTop > 200) {
      subscribers.forEach((s) => {
        // console.log("yes");
        const scrolledShrink = new CustomEvent("scrolledShrink", {
          detail: {
            name: "cat",
            bubbles: true,
          },
        });

        dispatchEvent(scrolledShrink);
      });
    } else {
      subscribers.forEach((s) => {
        // console.log("nope");
      });
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
