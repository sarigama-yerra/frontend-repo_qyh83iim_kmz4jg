import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold tracking-tight group-hover:text-blue-300 transition-colors">Dev Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg border border-white/10 transition-colors"><Github className="w-4 h-4"/>GitHub</a>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-3 text-slate-200">
              <a href="#projects" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5">Projects</a>
              <a href="#skills" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5">Skills</a>
              <a href="#about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5">Contact</a>
              <div className="flex gap-3 px-3">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-lg border border-white/10 transition-colors"><Mail className="w-4 h-4"/>Email</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-lg border border-white/10 transition-colors"><Linkedin className="w-4 h-4"/>LinkedIn</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
