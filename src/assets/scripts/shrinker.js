let subscribers = [];

class Shrinker {
  constructor() {
    console.log("Created shrinker");
    document.addEventListener("scroll", this.onScroll);
  }

  onScroll() {
    let fromTop = Math.round(window.scrollY);

    if (fromTop > 200) {
      subscribers.forEach((s) => {
        console.log(s);
      });
    }
  }

  init() {
    console.log("Shrinker Initialized");
  }

  subscribe(s) {
    subscribers.push(s);
    console.log(subscribers);
  }

  unsubscribe() {
    console.log("Unsubbed :(");
  }
}

const shrinker = new Shrinker();

export default shrinker;
