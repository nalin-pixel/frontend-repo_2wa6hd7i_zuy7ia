export default function Services() {
  const items = [
    {
      title: "Zero-to-One Sprint",
      desc: "2-week intensive to validate a concept: narrative, prototype, and first users.",
      points: ["Positioning + ICP", "Lean experiments", "Proto + landing"]
    },
    {
      title: "Traction Systems",
      desc: "Install growth and product rituals that compound: roadmap, metrics, feedback loops.",
      points: ["North-star metrics", "Weekly product cadence", "Growth experiments"]
    },
    {
      title: "Fundraising Readiness",
      desc: "Tighten story and data room: deck, narrative arc, investor Q&A, pipeline.",
      points: ["Deck + story", "Data room essentials", "Warm intros map"]
    }
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_40%)] opacity-60" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Offerings</h2>
        <p className="mt-3 text-blue-200/90 max-w-2xl">Pick a format that matches your stage. Each engagement is outcomes-first and time-boxed.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors">
              <div className="text-white font-semibold text-lg">{it.title}</div>
              <p className="mt-2 text-blue-200/90 text-sm">{it.desc}</p>
              <ul className="mt-4 space-y-2 text-blue-200/90 text-sm">
                {it.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block mt-5 text-sm text-blue-300 hover:text-blue-200">Book now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
