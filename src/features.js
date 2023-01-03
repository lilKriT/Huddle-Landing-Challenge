const nav = document.querySelector(".shrinkOnScroll");

const scrolling = (e) => {
  //   console.count("scrolling");
  const pixelsFromTop = Math.round(window.scrollY);
  //   console.log(pixelsFromTop);
  if (pixelsFromTop > 100) {
    console.log("srhink");
  } else {
  }
};
addEventListener("scroll", scrolling);
