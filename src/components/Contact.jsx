import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
      });
      const data = await res.json();
      setStatus(data?.message || 'Sent!');
    } catch (err) {
      setStatus('Failed to send.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-3 text-slate-300">Tell me about your project. I’m open to freelance and full-time opportunities.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <input name="name" required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" required placeholder="Your email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" required placeholder="Your message" rows="5" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow w-max">
            <Send className="w-4 h-4" /> Send message
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
