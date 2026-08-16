import { motion } from 'framer-motion'
import Reveal, { RevealStagger, staggerItem } from './Reveal.jsx'
import { IconCalendar, IconKey, IconUsers, IconChart, IconBed, IconShield } from './Icons.jsx'

const FEATURES = [
  { icon: IconCalendar, title: 'Real-time availability', body: 'Search any date range and instantly see which rooms are free — no manual cross-checking.' },
  { icon: IconKey, title: 'Instant booking flow', body: 'From room selection to confirmation in under a minute, with a clean guest-facing form.' },
  { icon: IconUsers, title: 'Guest & reservation management', body: 'Every booking in one table — search, review, and cancel without digging through email threads.' },
  { icon: IconChart, title: 'Occupancy dashboard', body: "Occupancy rate, bookings this week, and revenue at a glance — updated the moment a booking lands." },
  { icon: IconBed, title: 'Room inventory at a glance', body: 'Every room type, rate, and capacity laid out clearly for staff and guests alike.' },
  { icon: IconShield, title: 'Flexible cancellation', body: 'Cancel or amend a booking in a click — availability updates immediately, everywhere.' },
]

export default function Features() {
  return (
    <section id="features" className="border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-14 max-w-[54ch] text-center">
          <span className="mb-4 inline-block rounded-full bg-terracotta-light px-3.5 py-1.5 font-sans text-[.72rem] font-semibold uppercase tracking-[.07em] text-terracotta-dark">Features</span>
          <h2 className="mb-4 font-display text-[clamp(1.8rem,3.6vw,2.5rem)] font-semibold leading-[1.15] tracking-tight">Everything the front desk needs, nothing it doesn't.</h2>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <motion.div key={title} variants={staggerItem} whileHover={{ y: -6 }} className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-[0_20px_40px_-25px_rgba(156,75,31,.35)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-terracotta-light text-terracotta-dark"><Icon width={19} height={19} /></div>
              <h3 className="mb-2 font-display text-[1.02rem] font-semibold">{title}</h3>
              <p className="text-[.86rem] leading-relaxed text-ink-soft">{body}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
