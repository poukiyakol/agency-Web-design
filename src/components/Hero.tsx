import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 py-20 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(var(--color-neon-lime) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest uppercase border border-neon-lime text-neon-lime">
            Status: Available for Q2 2026
          </span>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
            HIGH-PERFORMANCE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-neon-purple">
              WEB SOLUTIONS
            </span> <br />
            FOR LOCAL BUSINESSES.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            From custom local deployments to automated workflows. I build the tech so you can run the business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#book-demo" className="group relative px-8 py-4 bg-neon-lime text-charcoal font-bold text-lg overflow-hidden transition-all hover:pr-12 text-center">
              <span className="relative z-10">BOOK A DEMO</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            </a>
            
            <a href="#portfolio" className="px-8 py-4 border border-white/20 hover:border-neon-purple hover:text-neon-purple transition-colors font-bold text-lg text-center">
              VIEW MY WORK
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="font-mono text-[10px] text-gray-600 space-y-1">
          <p>SYSTEM_CORE_LOADED: TRUE</p>
          <p>LATENCY: 14MS</p>
          <p>UPTIME: 99.99%</p>
        </div>
      </div>
    </section>
  );
}
