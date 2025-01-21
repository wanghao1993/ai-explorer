"use client";
import { useEffect, useState } from "react";
import { ArrowUpToLine } from "lucide-react";
export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log("GoTop");

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="absolute right-4 bottom-20">
      {isVisible && (
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-black text-white"
          onClick={scrollToTop}
        >
          <ArrowUpToLine />
        </div>
      )}
    </div>
  );
}
