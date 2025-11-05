import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/20">
                <Rocket className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">FLUX AI STUDIO</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-inner shadow-white/10 backdrop-blur transition hover:bg-white/20"
              >
                Start a project
              </a>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 md:hidden">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-lg bg-white/10 px-3 py-2 text-center text-sm font-medium text-white hover:bg-white/20"
                  onClick={() => setOpen(false)}
                >
                  Start a project
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
