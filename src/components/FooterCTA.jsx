import { Mail, ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative bg-[#060912] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur sm:p-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Mail className="h-3.5 w-3.5" />
              Let’s build something remarkable
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Tell us about your idea
            </h3>
            <p className="mt-2 max-w-prose text-white/70">
              We’ll get back within 24 hours with insights, scope, and the fastest path to launch.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-3"
            aria-label="Contact form"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/40"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/40"
              />
            </div>
            <textarea
              rows={4}
              required
              placeholder="What are you building?"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-cyan-400/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Request proposal
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Flux AI Studio. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#about" className="hover:text-white/80">About</a>
            <a href="#services" className="hover:text-white/80">Services</a>
            <a href="#work" className="hover:text-white/80">Work</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
