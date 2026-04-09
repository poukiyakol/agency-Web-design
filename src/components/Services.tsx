import { motion } from 'motion/react';
import { Globe, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Custom-built, lightning-fast sites optimized for Hostinger, GoDaddy, and local deployments.",
    icon: Globe,
    color: "text-neon-lime",
    borderColor: "border-neon-lime/30",
    delay: 0.1
  },
  {
    title: "Automation",
    description: "Using AI and local model integration to streamline repetitive tasks and boost efficiency.",
    icon: Cpu,
    color: "text-neon-purple",
    borderColor: "border-neon-purple/30",
    delay: 0.2
  },
  {
    title: "Deployment",
    description: "Seamless migrations and domain management that 'just works' without the technical headache.",
    icon: Zap,
    color: "text-white",
    borderColor: "border-white/20",
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section className="px-6 py-24 bg-dark-gray/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-neon-lime uppercase tracking-[0.3em] mb-4">Core Pillars</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">FLOWLESS SERVICES</h3>
          </div>
          <p className="text-gray-500 max-w-xs font-mono text-xs uppercase leading-relaxed">
            Focused on speed, technical authority, and conversion for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className={`group p-8 border ${service.borderColor} bg-charcoal hover:bg-dark-gray transition-all duration-500 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={80} />
              </div>
              
              <service.icon className={`${service.color} mb-6`} size={32} />
              <h4 className="text-2xl font-bold mb-4 group-hover:text-neon-lime transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray-600 uppercase">Service_ID: 0{index + 1}</span>
                <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} animate-pulse`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
