import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Flag, Server, Settings, Receipt } from "lucide-react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const WHY_ITEMS = [
  {
    icon: Flag,
    title: "British-built and supported",
    body: "Built in the UK for UK organisations — not retrofitted from US enterprise software.",
  },
  {
    icon: Server,
    title: "Edge-deployed",
    body: "Processing happens on-site, not in the cloud. Footage never leaves your building unless an incident occurs.",
  },
  {
    icon: Settings,
    title: "No IT burden",
    body: "We own the hardware, manage the system, and keep it running. Your team just uses it.",
  },
  {
    icon: Receipt,
    title: "Transparent pricing",
    body: "No custom quotes, no hidden costs. One installation fee, one monthly subscription.",
  },
];

export default function Homepage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#070809] text-white antialiased">
      <NavBar />

      <main>

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
          {/* IMAGE: Full-bleed hero background — dark, moody wide-angle environment
              (could be warehouse, retail, construction, healthcare, transport).
              Desaturated, overlaid with dark gradient so white text remains legible.
              Dimensions: 1920x1080 min. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <img
              src="/images/hero-praxis.jpg"
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070809]/70 via-[#070809]/60 to-[#070809]" />
          </div>
          {/* scanline grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent calc(100% - 1px), rgba(255,255,255,0.026) calc(100% - 1px))",
              backgroundSize: "100% 72px",
            }}
          />
          {/* vertical column break */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[58%] hidden w-px bg-white/[0.05] lg:block"
          />

          <div className="relative mx-auto grid max-w-[1200px] min-h-screen grid-cols-1 items-center gap-8 px-6 pb-16 pt-44 md:px-10 md:pt-48 lg:grid-cols-[1fr_400px] lg:pt-44">
            {/* Left */}
            <div className="flex flex-col justify-center space-y-10">
              <p className="reveal text-[10px] font-semibold uppercase tracking-[0.44em] text-blue-400">
                Greater Manchester · Computer vision
              </p>
              <h1 className="reveal text-[clamp(3.2rem,7.4vw,6.8rem)] font-bold leading-[0.88] tracking-[-0.035em] text-white">
                Computer Vision.<br />
                Any Problem.<br />
                Any Industry.
              </h1>
              <p className="reveal max-w-[44ch] text-lg leading-8 text-white/55 md:text-xl">
                Praxis GB builds computer vision applications that solve real-world problems — across industries, environments, and use cases. We handle the technology so you can focus on the outcome.
              </p>
              <div className="reveal flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/node"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all hover:bg-white/90 active:scale-95"
                >
                  See node →
                </Link>
                <span className="text-sm text-white/30">
                  Edge-deployed. No cloud required.
                </span>
              </div>
            </div>

            {/* Right — desktop asymmetric panel */}
            <div className="hidden flex-col gap-5 lg:flex reveal">
              <div
                className="rounded-xl p-8"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/35">
                  Our edge promise
                </p>
                <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-white">
                  On-site AI that never depends on the cloud.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  We train the models, manage the platform, and hand you a working system.
                  Footage stays inside the building unless a verified incident occurs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.022)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">Applied across</p>
                  <p className="mt-4 text-xl font-semibold tracking-tight text-white">Any sector</p>
                </div>
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.022)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">Built in</p>
                  <p className="mt-4 text-xl font-semibold tracking-tight text-white">The UK</p>
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/[0.06]" />
        </section>

        {/* ─── WHAT WE DO ───────────────────────────────────────────────── */}
        <section
          className="border-t border-white/[0.06] px-6 py-28 md:px-10"
          aria-label="What we do"
        >
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
            <div className="space-y-5 reveal">
              <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-blue-400">
                What we do
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.025em] text-white md:text-5xl">
                Computer vision that works.
              </h2>
              {/* Edge device / camera in a live environment */}
              <div className="mt-6 aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/[0.06]">
                <img
                  src="/images/edge-device.jpg"
                  alt="Security camera deployed on-site"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="self-end text-lg leading-9 text-white/55 reveal">
              Praxis GB builds computer vision applications for real-world problems. We design,
              train, and deploy the models — running on our hardware, on-site, with no cloud
              dependency required. Whatever cameras can see, we can build a system to understand it.
            </p>
          </div>
        </section>

        {/* ─── WHY PRAXIS GB ────────────────────────────────────────────── */}
        <section
          className="border-t border-white/[0.06] px-6 py-28 md:px-10"
          aria-label="Why Praxis GB"
        >
          <div className="mx-auto max-w-[1200px] space-y-16">
            <div className="reveal">
              <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-blue-400">Why Praxis GB</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.025em] text-white md:text-5xl">
                Built different.
              </h2>
            </div>
            <div
              className="grid border border-white/[0.06]"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
            >
              {WHY_ITEMS.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="reveal space-y-4 border-r border-b border-white/[0.06] p-8 last:border-r-0"
                  style={{
                    background: "rgba(255,255,255,0.018)",
                    transitionDelay: `${i * 70}ms`,
                  }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Icon className="h-4 w-4 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-white/45">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OUR PRODUCTS ─────────────────────────────────────────────── */}
        <section
          className="border-t border-white/[0.06] px-6 py-28 md:px-10"
          aria-label="Our products"
        >
          <div className="mx-auto max-w-[1200px] space-y-14">
            <div className="reveal">
              <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-blue-400">Our products</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.025em] text-white md:text-5xl">
                What we ship.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {/* node flagship */}
              <div
                className="reveal flex flex-col justify-between rounded-xl p-10"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-blue-400">Flagship product</p>
                      <img
                        src="/node-logo-compact.png"
                        alt=".node"
                        className="mt-3 h-16 w-auto"
                      />
                    </div>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                      Live
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-white/55">
                    Live safety monitoring for warehouses and logistics centres. node turns existing
                    cameras into edge AI that prevents near misses, enforces compliance, and generates
                    audit-ready evidence — all on your hardware.
                  </p>
                  <div className="space-y-2.5 border-t border-white/[0.07] pt-6">
                    <p className="text-sm text-white/40">— <span className="text-white/70">90%</span> detection accuracy in real operations</p>
                    <p className="text-sm text-white/40">— <span className="text-white/70">&lt;100ms</span> alert turnaround, on-device</p>
                  </div>
                  {/* node dashboard screenshot */}
                  <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-white/[0.06]">
                    <img
                      src="/images/dashboard.jpg"
                      alt="Analytics dashboard showing live detection data"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <Link
                  to="/node"
                  className="mt-10 inline-flex w-fit items-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
                >
                  Learn more →
                </Link>
              </div>

              {/* placeholder */}
              <div
                className="reveal flex flex-col justify-center rounded-xl p-10"
                style={{ border: "1px dashed rgba(255,255,255,0.1)" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-white/25">Coming soon</p>
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-white/35">Next product</h3>
                <p className="mt-5 text-sm leading-7 text-white/28">
                  More edge AI applications in development. We are expanding the Praxis GB suite
                  into new industries and new problem spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHO WE WORK WITH + FOUNDER NOTE ─────────────────────────── */}
        <section
          className="border-t border-white/[0.06] px-6 py-28 md:px-10"
          aria-label="About"
        >
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
            <div
              className="reveal rounded-xl p-10"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-blue-400">Who we work with</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                Any sector. Any environment.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/50">
                We work with organisations that have a real operational problem and cameras that
                can see it. From safety and compliance to monitoring, efficiency, and quality —
                if computer vision can help, we can build and deploy it.
              </p>
            </div>

            <div
              className="reveal rounded-xl p-10"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.44em] text-white/30">Founder note</p>
              <blockquote className="mt-6 text-[1.05rem] leading-8 text-white/58 italic">
                "Praxis GB was founded on the belief that computer vision should not require
                enterprise budgets or specialist in-house teams. We build the models, manage the
                infrastructure, and hand you a system that works — whatever problem you need solved."
              </blockquote>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
