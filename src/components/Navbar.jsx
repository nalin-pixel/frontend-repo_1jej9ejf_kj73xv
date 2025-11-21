import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 grid place-items-center text-white font-bold">
            M
          </div>
          <div>
            <div className="text-white font-semibold leading-none tracking-tight group-hover:text-blue-200 transition-colors">Meditech</div>
            <div className="text-xs text-blue-200/60 leading-none">Healthcare reimagined</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#experts" className="hover:text-white transition-colors">Experts</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur px-4 py-2 text-sm font-medium border border-white/10 transition-colors">Sign in</a>
          <a href="#book" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow">Book appointment</a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80"><Menu size={20} /></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
