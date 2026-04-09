import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-neon-lime flex items-center justify-center font-black text-charcoal text-xl">
            F
          </div>
          <div>
            <p className="font-bold tracking-tight">FLOWLESS <span className="text-neon-lime">AUTOMATIONS</span></p>
            <p className="text-[10px] font-mono text-gray-500 uppercase">© 2026 — ALL RIGHTS RESERVED</p>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="#book-demo" className="text-xs font-mono text-neon-lime hover:text-white transition-colors uppercase tracking-widest">
            Book Strategy Session
          </a>
          <a href="#" className="text-gray-500 hover:text-neon-lime transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-neon-lime transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-neon-lime transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">Powered by Flowless Automations</span>
          <ExternalLink size={10} className="text-gray-600" />
        </div>
      </div>
    </footer>
  );
}
