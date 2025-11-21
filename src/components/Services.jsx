import { HeartPulse, Stethoscope, Activity, Shield } from 'lucide-react'

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/80 to-cyan-400/80 text-white shadow shadow-blue-500/30">
        <Icon size={22} />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-blue-100/80">{desc}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Personalized care, end to end</h2>
          <p className="mt-2 text-blue-100/80">From prevention to recovery, our integrated platform brings your care team together around you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={Stethoscope} title="Primary care" desc="Same‑day visits with trusted physicians in‑person or online." />
          <ServiceCard icon={HeartPulse} title="Cardiology" desc="Advanced imaging, monitoring and personalized treatment plans." />
          <ServiceCard icon={Activity} title="Telehealth 24/7" desc="Secure video visits, prescriptions and remote monitoring." />
          <ServiceCard icon={Shield} title="Data security" desc="Bank‑grade encryption on every device to keep your records safe." />
        </div>
      </div>
    </section>
  )
}

export default Services
