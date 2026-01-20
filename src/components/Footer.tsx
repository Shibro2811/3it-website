'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'services', text: 'Услуги' },
    { id: 'pricing', text: 'Тарифы' },
    { id: 'about', text: 'О нас' },
    { id: 'team', text: 'Команда' },
    { id: 'contacts', text: 'Контакты' },
    { id: 'requisites', text: 'Реквизиты' },
  ];

  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#0d1117] border-t border-[#21262d]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Image
              src="/images/logo-3it.png"
              alt="3IT Logo"
              width={64}
              height={64}
              quality={100}
              unoptimized
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="font-unbounded text-xl sm:text-2xl font-bold text-[#7ee787]">3IT</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs sm:text-sm font-mono text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                {link.text}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent mb-6" />

          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono text-[#8b949e]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7ee787]" />
              Онлайн
            </span>
            <span className="hidden sm:inline">|</span>
            <span>© 2025 ООО «ТРИАЙТИ»</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
