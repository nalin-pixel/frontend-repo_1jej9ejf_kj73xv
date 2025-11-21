import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-blue-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Smart care, powered by technology
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Compassionate healthcare, reimagined for the digital age
          </h1>
          <p className="mt-4 text-blue-100/85 text-base sm:text-lg">
            Book appointments, meet world‑class specialists and manage your health records in one secure place. Experience precision medicine with a human touch.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow">Book an appointment</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors">Explore services</a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-blue-100/80">
            <div>
              <div className="text-2xl font-semibold text-white">120+</div>
              <div className="text-xs">Specialists</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">24/7</div>
              <div className="text-xs">Virtual care</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">99.9%</div>
              <div className="text-xs">Data security</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">50k+</div>
              <div className="text-xs">Happy patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
