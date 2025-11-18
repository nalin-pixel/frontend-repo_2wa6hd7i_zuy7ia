import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 text-white">
          <span className="inline-flex items-center gap-2 text-blue-300/90 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.8)]" />
            Startup Coaching • Product Strategy • Fundraising Readiness
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Level up your startup with a coach who has shipped and scaled
          </h1>
          <p className="mt-5 text-lg text-blue-200/90 max-w-xl">
            I help founders go from idea to traction: sharpen your story, validate faster, and build systems that scale. Practical, no-fluff guidance tailored to your stage.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors">
              Book a strategy call
            </a>
            <a href="#services" className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90">
              See offerings
            </a>
          </div>
          <div className="mt-8 text-blue-300/80 text-sm">
            100+ founders coached • Ex-operator • YC-style playbooks
          </div>
        </div>
        <div className="lg:col-span-6" />
      </div>
    </section>
  );
}
