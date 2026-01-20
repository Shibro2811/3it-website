'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#0d1117] border-t border-[#21262d]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-5xl mx-auto">
        {/* HTML Code Style Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#161b22] border border-[#30363d] rounded-lg sm:rounded-xl overflow-hidden"
        >
          {/* Mac Header */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#21262d] border-b border-[#30363d]">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27ca3f]" />
            <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs font-mono text-[#8b949e]">footer.html</span>
          </div>

          {/* Code Content */}
          <div className="p-3 sm:p-6 font-mono text-[10px] sm:text-sm leading-loose overflow-x-auto">
            {/* Opening footer tag */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-5 sm:w-8">1</span>
              <span>
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">footer</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Logo */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-5 sm:w-8">2</span>
              <span className="ml-2 sm:ml-4">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">h1</span>
                <span className="text-[#79c0ff]"> class</span>
                <span className="text-[#8b949e]">=</span>
                <span className="text-[#a5d6ff]">&quot;logo&quot;</span>
                <span className="text-[#8b949e]">&gt;</span>
                <span className="text-[#58a6ff] font-bold">3IT</span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">h1</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Nav opening */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-5 sm:w-8">3</span>
              <span className="ml-2 sm:ml-4">
                <span className="text-[#8b949e]">&lt;</span>
                <span className="text-[#7ee787]">nav</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Nav links */}
            {[
              { id: 'services', text: 'Услуги' },
              { id: 'pricing', text: 'Тарифы' },
              { id: 'about', text: 'О нас' },
              { id: 'team', text: 'Команда' },
              { id: 'contacts', text: 'Контакты' },
              { id: 'requisites', text: 'Реквизиты' },
            ].map((link, i) => (
              <div key={link.id} className="flex">
                <span className="text-[#30363d] select-none w-5 sm:w-8">{4 + i}</span>
                <span className="ml-4 sm:ml-8">
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
              <span className="text-[#30363d] select-none w-5 sm:w-8">10</span>
              <span className="ml-2 sm:ml-4">
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">nav</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>

            {/* Copyright comment */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-5 sm:w-8">11</span>
              <span className="ml-2 sm:ml-4">
                <span className="text-[#8b949e]">&lt;!-- © 2025 ООО «ТРИАЙТИ» --&gt;</span>
              </span>
            </div>

            {/* Closing footer tag */}
            <div className="flex">
              <span className="text-[#30363d] select-none w-5 sm:w-8">12</span>
              <span>
                <span className="text-[#8b949e]">&lt;/</span>
                <span className="text-[#7ee787]">footer</span>
                <span className="text-[#8b949e]">&gt;</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar with logo */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono text-[#8b949e]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-3it.png"
              alt="3IT Logo"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-[#58a6ff] font-bold">3IT</span>
          </div>
          <span>|</span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7ee787]" />
            Онлайн
          </span>
          <span>|</span>
          <span>© 2025 ООО «ТРИАЙТИ»</span>
        </div>
      </div>
    </footer>
  );
}
