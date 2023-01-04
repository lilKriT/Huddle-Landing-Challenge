let items = [];

export const run = (root) => {
  console.log("Running feature");
  items = this.renderRoot.querySelectorAll("*");
  console.log(items);
};

export function go(root) {
  console.log("Going feature");
  items = root.querySelectorAll(".shrinkOnScroll");
  //   items = this.renderRoot.querySelectorAll("*");
  console.log(items);
}
