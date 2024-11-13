import React, { useEffect } from "react";
import { useState } from "react";

export default function ScrolltoTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: add smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`scroll-to-top ${
        isVisible ? "visible dark:text-white text-yellow-500 z-30" : ""
      }`}
    >
      {isVisible && (
        <button className="arrow mb-10" onClick={scrollToTop} title="Go to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-up"
          >
            <path d="M8 6L12 2L16 6" />
            <path d="M12 2V22" />
          </svg>
        </button>
      )}
    </div>
  );
}
