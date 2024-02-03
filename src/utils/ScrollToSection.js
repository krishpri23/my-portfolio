const scrollToSection = (elRef) => {
  window.scrollTo({
    top: elRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default scrollToSection;
