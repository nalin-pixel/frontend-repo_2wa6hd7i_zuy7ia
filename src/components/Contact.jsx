import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Error');
      setStatus('Thanks! I will reach out soon.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s talk</h2>
        <p className="mt-3 text-blue-200/90">Tell me about your goals and we’ll schedule a quick intro.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 outline-none focus:border-blue-500/60" />
          <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 outline-none focus:border-blue-500/60" />
          <input name="company" placeholder="Company / Project" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 outline-none focus:border-blue-500/60" />
          <textarea name="message" required rows="5" placeholder="What are you working on?" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 outline-none focus:border-blue-500/60" />
          <button className="mt-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors w-max">Send message</button>
          <div className="text-sm text-blue-300/90 h-5">{status}</div>
        </form>
      </div>
    </section>
  );
}
