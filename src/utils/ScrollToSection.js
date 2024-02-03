const scrollToSection = (elRef) => {
  console.log("inside scroll sec", elRef);
  window.scrollTo({
    top: elRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default scrollToSection;
