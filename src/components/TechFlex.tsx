import { motion } from 'motion/react';
import { Terminal, Sparkles, Gauge } from 'lucide-react';

export default function TechFlex() {
  return (
    <section className="px-6 py-24 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            THE TECHNICAL <span className="text-neon-lime italic">FLEX</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-neon-lime/10 flex items-center justify-center border border-neon-lime/20">
                <Sparkles className="text-neon-lime" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">High-End Motion Design</h4>
                <p className="text-gray-400 leading-relaxed">
                  Fluid, high-quality animations that guide the user and reinforce your brand. 
                  I use <span className="text-white font-mono">Motion</span> and <span className="text-white font-mono">CSS</span> to create immersive experiences that don't compromise on speed.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
                <Gauge className="text-neon-purple" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Performance First</h4>
                <p className="text-gray-400 leading-relaxed">
                  Every build is optimized for a <span className="text-neon-lime font-bold">100/100 Lighthouse score</span>. 
                  In the freelance world, speed isn't just a metric—it's the ultimate social proof.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Terminal Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#050505] border border-white/10 rounded-lg overflow-hidden shadow-2xl shadow-neon-lime/5"
          >
            <div className="bg-dark-gray px-4 py-2 flex items-center gap-2 border-bottom border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-4 text-[10px] font-mono text-gray-500">bash — lighthouse-audit</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <p className="text-gray-500">$ npx lighthouse https://flowless.agency</p>
              <p className="text-neon-lime">✓ Performance: 100</p>
              <p className="text-neon-lime">✓ Accessibility: 100</p>
              <p className="text-neon-lime">✓ Best Practices: 100</p>
              <p className="text-neon-lime">✓ SEO: 100</p>
              <p className="text-gray-500 mt-4">Audit complete. System optimized.</p>
              <div className="w-2 h-5 bg-neon-lime animate-pulse inline-block align-middle ml-1" />
            </div>
          </motion.div>
          
          {/* Decorative background glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-lime/5 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
