import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'WebSocket powered chat with typing indicators, presence, and message reactions.',
    tags: ['React', 'FastAPI', 'WebSocket', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'Ecommerce Starter',
    description: 'Headless storefront with product catalog, cart, and checkout flow.',
    tags: ['React', 'Stripe', 'MongoDB', 'Radix UI'],
    link: '#',
    github: '#'
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI that scaffolds a modern portfolio with themeable sections and CMS integration.',
    tags: ['Node', 'CLI', 'Content API'],
    link: '#',
    github: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured projects</h2>
          <p className="mt-3 text-slate-300">A selection of work showcasing product thinking, interaction, and performance.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="p-6">
                <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
                  <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-blue-300 hover:text-white text-sm"><ExternalLink className="w-4 h-4" />Live</a>
                  <a href={p.github} className="inline-flex items-center gap-1 text-blue-300 hover:text-white text-sm"><Github className="w-4 h-4" />Code</a>
                </div>
              </div>

              {/* gradient hover bar */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.4 }}
                className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
