import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'AI SaaS',
    title: 'Realtime transcription & insights platform',
    result: 'Decreased onboarding time by 45% and lifted conversions by 22%.'
  },
  {
    tag: 'Fintech App',
    title: 'Personal finance co-pilot with secure LLMs',
    result: 'Increased weekly active users by 31% through better UX and speed.'
  },
  {
    tag: 'E-commerce',
    title: '3D product customizer and AR preview',
    result: 'Boosted AOV by 18% with immersive product exploration.'
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative bg-[#070B14] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(25%_35%_at_20%_60%,rgba(34,197,94,0.12),transparent),radial-gradient(25%_35%_at_80%_30%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Recent work</h2>
          <p className="mt-3 text-white/70">Selective highlights from recent product launches.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-6 backdrop-blur"
            >
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                {c.tag}
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white/95">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.result}</p>

              <div className="mt-6 h-32 w-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.15),rgba(56,189,248,0.12))] shadow-inner">
                <div className="h-full w-full bg-[radial-gradient(60%_80%_at_70%_20%,rgba(255,255,255,0.15),transparent)]" />
              </div>

              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
