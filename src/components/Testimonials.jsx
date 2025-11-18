export default function Testimonials() {
  const quotes = [
    {
      text:
        "We went from a vague idea to a clear positioning and 30 design partner calls in four weeks.",
      author: "Maya R.",
      role: "Founder, Fintech"
    },
    {
      text:
        "The fundraising prep was brutally helpful. Our story clicked and the investor Q&A doc saved us.",
      author: "Liam P.",
      role: "CEO, AI Ops"
    },
    {
      text:
        "Installed a product cadence that actually stuck. We're shipping faster with less chaos.",
      author: "Anika S.",
      role: "CTO, SaaS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Founder feedback</h2>
        <p className="mt-3 text-blue-200/90 max-w-2xl">Real outcomes from practical coaching.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <blockquote className="text-blue-100/95">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-blue-300/90">{q.author} • {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
