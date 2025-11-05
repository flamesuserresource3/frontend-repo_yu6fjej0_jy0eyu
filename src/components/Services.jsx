import { Brain, AppWindow, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Brain,
    title: 'AI Consulting & Integration',
    desc: 'LLM-powered features, chat interfaces, RAG systems, and automation integrated securely into your product.',
  },
  {
    icon: AppWindow,
    title: 'App & Product Engineering',
    desc: 'Design-to-code pipelines, rapid prototyping, and production-ready apps across web and mobile.',
  },
  {
    icon: Globe,
    title: 'Web Experience & Marketing',
    desc: 'High-performance sites with modern SEO, analytics, and A/B testing baked in from day one.',
  },
  {
    icon: Sparkles,
    title: '3D & Motion Design',
    desc: 'Spline and WebGL visuals, micro-interactions, and glassmorphic systems that elevate brand presence.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#080C16] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_40%_at_80%_50%,rgba(99,102,241,0.15),transparent),radial-gradient(25%_35%_at_10%_30%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">
            Strategy, design, and engineering to launch category-defining products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 p-3">
                <s.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
