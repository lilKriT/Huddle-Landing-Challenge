const navs = document.querySelectorAll("*");
const test = document.querySelector("h-header").renderRoot;

const scrolling = (e) => {
  // console.log(test);
  //   console.count("scrolling");
  const pixelsFromTop = Math.round(window.scrollY);
  //   console.log(pixelsFromTop);
  if (pixelsFromTop > 100) {
    // console.log("srhink");
    // console.log(navs.length);
    // navs.forEach((element) => console.log(element));
  } else {
    // console.log("grow");
  }
};
addEventListener("scroll", scrolling);
