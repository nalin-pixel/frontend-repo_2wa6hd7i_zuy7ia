import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Offerings", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold tracking-tight">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
          Startup Coach
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            Book a Call
          </a>
        </div>

        <button className="md:hidden text-white" aria-label="Open Menu" onClick={() => setOpen((v) => !v)}>
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-slate-200/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full bg-blue-600 text-white w-max">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
