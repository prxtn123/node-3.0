import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { scrollToElement } from "@/lib/scroll";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI-powered warehouse safety"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[980px] mx-auto px-6 pt-20 pb-32 text-center">
        {/* Overline */}
        <p className="text-blue-500 text-sm font-medium tracking-wide mb-6 animate-fade-in">
          AI-Powered Safety Platform
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold text-foreground leading-[1.05] tracking-tight mb-6 animate-fade-in-delay-1">
          The future of
          <br />
          logistics safety.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-normal max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-2">
          Proactively prevent near misses. Ensure total compliance.
          <br className="hidden md:block" />
          Transform standard cameras into intelligent safety systems.
        </p>

        {/* CTA Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-3">
          <button
            onClick={() => scrollToElement("product")}
            className="inline-flex items-center gap-2 text-xl text-blue-500 hover:text-blue-600 transition-colors"
          >
            Learn more
            <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollToElement("contact")}
            className="inline-flex items-center gap-2 text-xl text-foreground/80 hover:text-foreground transition-colors"
          >
            Request a demo
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
