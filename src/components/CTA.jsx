function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 py-16">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_circle_at_80%_-20%,white,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-white">Ready to take control of your health?</h3>
            <p className="mt-2 text-white/90">Create your account to book appointments, message your care team and access records securely.</p>
          </div>
          <form className="rounded-2xl bg-white/10 p-4 backdrop-blur border border-white/20 shadow-lg">
            <div className="grid gap-3 sm:grid-cols-3">
              <input type="text" placeholder="Full name" className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button className="rounded-xl bg-white text-slate-900 font-semibold px-4 py-2 hover:bg-blue-50 transition-colors">Get started</button>
            </div>
            <p className="mt-2 text-xs text-white/80">By signing up you agree to our Terms and Privacy Policy.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
