import { motion } from 'motion/react';
import { Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    description: "We dive deep into your business goals and current bottlenecks to find the highest-impact solutions.",
    icon: Search,
    color: "text-neon-lime"
  },
  {
    title: "Design & Build",
    description: "Rapid prototyping and development using high-performance frameworks and motion design.",
    icon: PenTool,
    color: "text-neon-purple"
  },
  {
    title: "Deployment",
    description: "Seamless launch and optimization, ensuring 100/100 performance scores and maximum conversion.",
    icon: Rocket,
    color: "text-white"
  }
];

export default function Process() {
  return (
    <section className="px-6 py-24 bg-dark-gray/20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-neon-lime uppercase tracking-[0.3em] mb-4">The Workflow</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">HOW WE <span className="italic">FLOW</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mb-8 flex items-center justify-center bg-charcoal border border-white/10 rounded-lg ${step.color}`}>
                  <step.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
