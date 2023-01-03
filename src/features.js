const scrolling = (e) => {
  //   console.count("scrolling");
  const pixelsFromTop = Math.round(window.scrollY);
  console.log(pixelsFromTop);
};
addEventListener("scroll", scrolling);
