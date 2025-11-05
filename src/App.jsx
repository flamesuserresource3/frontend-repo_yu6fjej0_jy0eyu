import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#060913] font-['Inter','Geist','Mona Sans','Manrope',system-ui,sans-serif] text-white">
      {/* Subtle page background grid for depth */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_95%,rgba(255,255,255,0.04)_95%),linear-gradient(to_bottom,transparent_0,transparent_95%,rgba(255,255,255,0.04)_95%)] bg-[length:24px_24px]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <section id="about" className="relative bg-[#070B14] py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(25%_30%_at_50%_10%,rgba(99,102,241,0.12),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur sm:p-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A minimalist studio for maximal impact</h2>
              <p className="mt-3 text-white/70">
                We partner with visionary teams to concept, design, and ship products that move the needle. Our approach blends research-driven UX, refined aesthetics, and pragmatic engineering to deliver outcomes, not just output.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">2–6 week sprints</li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">Design systems & motion</li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">Performance & accessibility</li>
              </ul>
            </div>
          </div>
        </section>
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
