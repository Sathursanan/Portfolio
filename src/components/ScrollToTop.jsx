import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center
      bg-gradient-to-r from-pink-500 to-purple-500 shadow-glow2 transition
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
      aria-label="Scroll to top"
      type="button"
    >
      <FaArrowUp />
    </button>
  );
}
