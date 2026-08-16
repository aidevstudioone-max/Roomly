import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconCheck } from './Icons.jsx'

const PLANS = [
  { name: 'Solo Host', price: '₹1,499', unit: '/mo', desc: 'For a single property up to 6 rooms.', features: ['Up to 6 rooms', 'Real-time availability search', 'Booking & cancellation management', 'Email support'], cta: 'Try Live Demo', href: 'app.html', featured: false },
  { name: 'Boutique', price: '₹3,499', unit: '/mo', desc: 'For growing properties up to 25 rooms.', features: ['Up to 25 rooms', 'Everything in Solo Host', 'Occupancy & revenue dashboard', 'Priority support'], cta: 'Try Live Demo', href: 'app.html', featured: true },
  { name: 'Portfolio', price: 'Custom', unit: '', desc: 'For multi-property groups and chains.', features: ['Unlimited rooms & properties', 'Everything in Boutique', 'Multi-property reporting', 'Dedicated onboarding'], cta: 'Talk to Us', href: '#top', featured: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-14 max-w-[54ch] text-center">
          <span className="mb-4 inline-block rounded-full bg-terracotta-light px-3.5 py-1.5 font-sans text-[.72rem] font-semibold uppercase tracking-[.07em] text-terracotta-dark">Pricing</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold leading-[1.15] tracking-tight">Simple pricing, built for small properties.</h2>
          <p className="text-[1.02rem] leading-relaxed text-ink-soft text-pretty">Every plan includes the full booking engine and dashboard. Pick the one that matches your room count.</p>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PLANS.map((p) => (
            <motion.div key={p.name} variants={staggerItem} whileHover={{ y: -6 }} className={`relative flex flex-col rounded-2xl border p-7 ${p.featured ? 'border-terracotta bg-surface shadow-[0_25px_60px_-25px_rgba(156,75,31,.45)]' : 'border-border bg-surface'}`}>
              {p.featured && <span className="absolute -top-3 left-7 rounded-full bg-terracotta px-3 py-1 font-sans text-[.65rem] font-bold uppercase tracking-wide text-white">Most Popular</span>}
              <h3 className="mb-2 font-display text-[1.05rem] font-semibold">{p.name}</h3>
              <div className="font-display text-[2rem] font-bold tracking-tight">{p.price}<small className="text-[.8rem] font-normal text-ink-soft">{p.unit}</small></div>
              <p className="my-3 flex-1 text-[.86rem] leading-relaxed text-ink-soft">{p.desc}</p>
              <ul className="mb-6 flex flex-col gap-2">
                {p.features.map((f) => (<li key={f} className="flex items-start gap-2 text-[.84rem]"><IconCheck width={14} height={14} className="mt-0.5 shrink-0 text-green" />{f}</li>))}
              </ul>
              <a href={p.href} className={`rounded-lg py-3 text-center text-[.88rem] font-semibold transition-colors ${p.featured ? 'bg-terracotta text-white hover:bg-terracotta-dark' : 'border border-border text-ink hover:border-terracotta hover:bg-terracotta-light'}`}>{p.cta}</a>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
