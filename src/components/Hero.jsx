import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden bg-[#0B0F1A] pt-28 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and glass overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(30%_25%_at_80%_10%,rgba(56,189,248,0.25),transparent)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 py-20 text-center sm:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Glassmorphic AI experiences • Realtime 3D • Production-grade
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl sm:leading-[1.05]"
            >
              We craft intelligent apps and websites
              <br className="hidden sm:block" /> that feel like the future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-pretty text-base text-white/70 sm:text-lg"
            >
              A boutique agency blending AI, design, and engineering to ship fast, scalable, and beautiful digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                Start a project
                <span className="translate-x-0 transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                See our work
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
