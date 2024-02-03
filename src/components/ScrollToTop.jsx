import React, { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  console.log(showScrollTop);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else setShowScrollTop(false);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showScrollTop && (
      <FaAnglesUp
        className="py-5 w-20 h-20 fixed bottom-5 right-2 border-2 border-black bg-slate-900 text-slate-200 rounded-3xl"
        onClick={scrollTop}
      />
    )
  );
};

export default ScrollToTop;
