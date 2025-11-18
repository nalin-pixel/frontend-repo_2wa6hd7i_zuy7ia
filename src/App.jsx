import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(37,99,235,0.20),transparent_60%)]" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 text-center text-blue-300/80">
        © {new Date().getFullYear()} Startup Coach — Practical coaching for ambitious founders
      </footer>
    </div>
  );
}

export default App;
