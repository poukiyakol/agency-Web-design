import { motion } from 'motion/react';
import { InlineWidget } from 'react-calendly';
import { Calendar } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book-demo" className="px-6 py-24 bg-charcoal border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono tracking-widest uppercase border border-neon-purple text-neon-purple">
              <Calendar size={14} />
              <span>Live Strategy Session</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              SEE YOUR FUTURE <span className="text-neon-lime italic">WEBSITE</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Book a 30-minute rapid demo. I'll show you exactly how we can transform your digital presence and automate your workflows.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-dark-gray border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-neon-purple/5 min-h-[700px]"
        >
          <InlineWidget 
            url="https://calendly.com/creunchbench/30min" 
            styles={{
              height: '700px',
              width: '100%'
            }}
            pageSettings={{
              backgroundColor: '0D0D0D',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'CCFF00',
              textColor: 'FFFFFF'
            }}
          />
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">
            * Replace the URL in src/components/Booking.tsx with your actual Calendly link
          </p>
        </div>
      </div>
    </section>
  );
}
