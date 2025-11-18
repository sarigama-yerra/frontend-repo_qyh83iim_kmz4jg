import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} Your Name — Built with love</footer>
    </div>
  )
}

export default App
