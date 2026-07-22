import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNode = location.pathname === "/node" || location.pathname.startsWith("/node/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-black/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-[18px] md:px-10">
        <Link
          to="/"
          className={`transition-opacity duration-200 ${
            location.pathname === "/" ? "opacity-100" : "opacity-70 hover:opacity-100"
          }`}
        >
          <img
            src="/praxis-logo.png"
            alt="Praxis GB"
            className="h-[130px] w-auto"
          />
        </Link>

        <Link
          to="/node"
          className={`transition-opacity duration-200 ${
            onNode ? "opacity-100" : "opacity-70 hover:opacity-100"
          }`}
        >
          <img
            src="/node-logo-compact.png"
            alt=".node"
            className="h-[20px] w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
