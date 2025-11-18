import { Code2, Sparkles, Rocket, Cpu } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'REST & WebSockets'] },
  { icon: Rocket, title: 'Performance', items: ['Lighthouse 95+', 'Code Splitting', 'SSR Ready'] },
  { icon: Sparkles, title: 'UX', items: ['Radix UI', 'Animations', 'Accessibility', 'Design Systems'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills and strengths</h2>
          <p className="mt-3 text-slate-300">Tools and practices I use to ship high-quality, maintainable interfaces.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {items.map((i) => (
                  <li key={i} className="">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
