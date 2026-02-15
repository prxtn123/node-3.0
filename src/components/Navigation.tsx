import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/scroll";

const navLinks = [
  { name: "Product", target: "product" },
  { name: "Features", target: "features" },
  { name: "Safety", target: "compliance" },
  { name: "Contact", target: "contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on a light background page (not homepage)
  const isLightPage = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsMobileMenuOpen(false);
    
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToElement(target);
      }, 100);
    } else {
      scrollToElement(target);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightPage ? "nav-apple border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-2"
          >
            <span className={`font-semibold text-2xl tracking-tight transition-colors ${
              isScrolled || isLightPage ? "text-foreground" : "text-white"
            }`}>
              .node
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.target)}
                className={`text-xs font-normal transition-colors ${
                  isScrolled || isLightPage
                    ? "text-foreground/80 hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("contact")}
              className={`text-xs font-normal transition-colors ${
                isScrolled || isLightPage
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-blue-400 hover:text-blue-300"
              }`}
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled || isLightPage ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 nav-apple border-t border-black/5">
            <div className="max-w-[980px] mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.target)}
                  className="text-sm text-foreground/80 hover:text-foreground py-2 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="text-sm text-blue-500 hover:text-blue-600 py-2 transition-colors text-left"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
