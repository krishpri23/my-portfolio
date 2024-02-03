const scrollToSection = (elRef) => {
  console.log("inside scroll sec", elRef.current);
  window.scrollTo({
    top: elRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default scrollToSection;
