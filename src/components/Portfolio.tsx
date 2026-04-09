import { motion } from 'motion/react';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "valerieramesa.tech",
    description: "Technical portfolio and professional showcase for Valerie Ramesa.",
    url: "https://valerieramesa.tech",
    tags: ["React", "Vite", "Performance"],
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fvalerieramesa.tech?w=800"
  },
  {
    title: "trinitychange.org",
    description: "Digital platform for Trinity Change, focusing on community impact.",
    url: "https://trinitychange.org",
    tags: ["Non-Profit", "Web Design", "Accessibility"],
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftrinitychange.org?w=800"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24 bg-dark-gray/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono text-neon-purple uppercase tracking-[0.3em] mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">PROVEN RESULTS</h3>
          </div>
          <p className="text-gray-500 max-w-xs font-mono text-xs uppercase leading-relaxed">
            A glimpse into the high-performance deployments I've delivered for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-charcoal border border-white/5 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="p-2 bg-charcoal/80 border border-white/10 backdrop-blur-md rounded">
                    <Monitor size={14} className="text-gray-400" />
                  </div>
                  <div className="p-2 bg-charcoal/80 border border-white/10 backdrop-blur-md rounded">
                    <Smartphone size={14} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-white/10 text-gray-500 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold mb-2 group-hover:text-neon-lime transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-neon-lime transition-colors"
                >
                  VISIT SITE <ExternalLink size={14} />
                </a>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-neon-lime/5 translate-x-6 translate-y-6 rotate-45 group-hover:bg-neon-lime/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
