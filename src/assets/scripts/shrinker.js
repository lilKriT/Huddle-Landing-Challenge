class Shrinker {
  constructor() {
    this.subscribers = [];
    console.log("Created shrinker");
    document.addEventListener("scroll", () => {
      let fromTop = Math.round(window.scrollY);
      console.log(`Scrolled: ${fromTop}`);
    });
  }

  init() {
    console.log("Shrinker Initialized");
  }

  subscribe(s) {
    this.subscribers.push(s);
    console.log(this.subscribers);
  }

  unsubscribe() {
    console.log("Unsubbed :(");
  }
}

export default Shrinker;
