import { motion } from 'framer-motion';
import { User, Trophy, Briefcase } from 'lucide-react';

export default function About() {
  const items = [
    { icon: User, title: 'About me', text: 'I’m a product-minded developer who loves crafting fluid interactions and shipping fast.' },
    { icon: Briefcase, title: 'Experience', text: '4+ years building web apps across startups and agencies with measurable impact.' },
    { icon: Trophy, title: 'Highlights', text: 'Led launches that increased conversion +18% and improved Lighthouse scores to 98.' },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-3 text-slate-300">A quick snapshot of who I am and how I work.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
