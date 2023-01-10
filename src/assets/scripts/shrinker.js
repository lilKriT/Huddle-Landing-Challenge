class Shrinker {
  constructor() {
    this.subscribers = [];
    console.log("Created shrinker");
  }

  subscribe() {
    console.log("Subbed");
  }

  unsubscribe() {
    console.log("Unsubbed :(");
  }

  static staticSub() {
    console.log("Static subbed");
  }
}

export default Shrinker;
