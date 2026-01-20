'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#0d1117] border-t border-[#21262d]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-4xl mx-auto">
        {/* HTML Code Style Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden"
        >
          {/* Mac Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
            <span className="ml-2 text-xs font-mono text-[#8b949e]">footer.html</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm leading-loose">
            {/* Opening footer tag */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">1</span>
              <span>
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">footer</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Company div */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">2</span>
              <span className="ml-4">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">div</span>
                <span className="text-[#79c0ff]"> class</span>
                <span className="text-[#8b949e]">=</span>
                <span className="text-[#a5d6ff]">&quot;company&quot;</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Logo */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">3</span>
              <span className="ml-8">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">h1</span>
                <span className="text-[#8b949e]">&gt;</span>
                <span className="text-[#58a6ff] font-bold">3IT</span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">h1</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Company name */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">4</span>
              <span className="ml-8">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">p</span>
                <span className="text-[#8b949e]">&gt;</span>
                <span className="text-[#c9d1d9]">ООО «ТРИАЙТИ»</span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">p</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* INN */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">5</span>
              <span className="ml-8">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">span</span>
                <span className="text-[#79c0ff]"> id</span>
                <span className="text-[#8b949e]">=</span>
                <span className="text-[#a5d6ff]">&quot;inn&quot;</span>
                <span className="text-[#8b949e]">&gt;</span>
                <span className="text-[#c9d1d9]">2630054680</span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">span</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* OGRN */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">6</span>
              <span className="ml-8">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">span</span>
                <span className="text-[#79c0ff]"> id</span>
                <span className="text-[#8b949e]">=</span>
                <span className="text-[#a5d6ff]">&quot;ogrn&quot;</span>
                <span className="text-[#8b949e]">&gt;</span>
                <span className="text-[#c9d1d9]">1252600011355</span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">span</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Close company div */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">7</span>
              <span className="ml-4">
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">div</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Nav */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">8</span>
              <span className="ml-4">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">nav</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Nav links */}
            {[
              { id: 'about', text: 'О нас' },
              { id: 'services', text: 'Услуги' },
              { id: 'team', text: 'Команда' },
              { id: 'contacts', text: 'Контакты' },
            ].map((link, i) => (
              <div key={link.id} className="flex">
                <span className="text-[#30363d] select-none w-8">{9 + i}</span>
                <span className="ml-8">
                  <span className="text-[#8b949e]">&lt;</span>
                  <span className="text-[#7ee787]">a</span>
                  <span className="text-[#79c0ff]"> href</span>
                  <span className="text-[#8b949e]">=</span>
                  <span className="text-[#a5d6ff]">&quot;#{link.id}&quot;</span>
                  <span className="text-[#8b949e]">&gt;</span>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors cursor-pointer"
                  >
                    {link.text}
                  </button>
                  <span className="text-[#8b949e]">&lt;/</span>
                  <span className="text-[#7ee787]">a</span>
                  <span className="text-[#8b949e]">&gt;</span>
                </span>
              </div>
            ))}

            {/* Close nav */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">13</span>
              <span className="ml-4">
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">nav</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Copyright comment */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">14</span>
              <span className="ml-4">
                <span className="text-[#8b949e]">&lt;!-- </span>
                <span className="text-[#8b949e]">© 2025 3IT. Все права защищены. </span>
                <span className="text-[#8b949e]">--&gt;</span>
              </span>
            </div>

            {/* Closing footer tag */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-8">15</span>
              <span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">footer</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-[#8b949e]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7ee787]" />
            Онлайн
          </span>
          <span>|</span>
          <span>© 2025 3IT</span>
        </div>
      </div>
    </footer>
  );
}
