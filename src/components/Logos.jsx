import { motion } from 'framer-motion';

const items = ['React', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion', 'Radix UI', 'Vite', 'TypeScript'];

export default function Logos() {
  const row = [...items, ...items];
  return (
    <section aria-label="Tech I use" className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            {row.map((label, i) => (
              <span
                key={`${label}-${i}`}
                className="mx-6 my-4 inline-flex items-center rounded-lg bg-white/5 px-4 py-2 text-sm text-slate-200 border border-white/10"
              >
                {label}
              </span>
            ))}
          </motion.div>
          {/* Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  );
}
