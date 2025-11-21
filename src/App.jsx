import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />

      {/* Testimonials */}
      <section id="testimonials" className="relative bg-slate-950 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_100%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(34,211,238,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Trusted by patients worldwide</h2>
            <p className="mt-2 text-blue-100/80">Real stories from people who chose technology‑powered care.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: 'The virtual cardiology consult was seamless and incredibly thorough. I felt heard and cared for.',
                name: 'Ava M.',
              },
              {
                quote: 'Booking, reminders and records in one place. It has simplified managing my family’s health.',
                name: 'Daniel R.',
              },
              {
                quote: 'Security and privacy were my biggest concerns. Their platform gave me complete peace of mind.',
                name: 'Sophia K.',
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-blue-100/90">“{t.quote}”</p>
                <div className="mt-4 text-sm text-white/90 font-medium">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default App
