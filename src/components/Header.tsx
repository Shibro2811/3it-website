'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#about', label: 'О нас' },
  { href: '#team', label: 'Команда' },
  { href: '#contacts', label: 'Контакты' },
  { href: '#requisites', label: 'Реквизиты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-[#21262d]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-md bg-[#161b22]/80 border border-[#30363d] group-hover:border-[#58a6ff]/50 transition-colors">
                <Image
                  src="/images/logo-3it.png"
                  alt="3IT Logo"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="font-mono text-base sm:text-lg font-bold text-[#58a6ff]">3IT</span>
              </div>
            </Link>

            {/* Desktop Navigation - styled like editor tabs */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center bg-[#161b22]/60 rounded-lg border border-[#30363d]/50 p-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-3 py-1.5 text-xs font-mono text-[#8b949e] hover:text-white hover:bg-[#21262d] rounded-md transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center gap-2 px-3 py-1.5 text-[#8b949e] hover:text-white bg-[#161b22]/80 border border-[#30363d] hover:border-[#58a6ff]/50 rounded-md transition-all font-mono text-sm"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="w-4 h-4" />
                  <span className="text-xs">close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4" />
                  <span className="text-xs">menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0d1117] border-l border-[#30363d] md:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-[#8b949e]">navigation.tsx</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-[#8b949e] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="p-4">
                <div className="font-mono text-xs text-[#8b949e] mb-3">
                  <span className="text-[#ff7b72]">const</span>{' '}
                  <span className="text-[#c9d1d9]">links</span>{' '}
                  <span className="text-[#8b949e]">=</span>{' '}
                  <span className="text-[#8b949e]">[</span>
                </div>
                <nav className="flex flex-col gap-1 ml-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left px-3 py-2.5 text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#161b22] rounded-md transition-all font-mono text-sm group"
                    >
                      <span className="text-[#a5d6ff]">"</span>
                      <span className="group-hover:text-[#58a6ff]">{link.label}</span>
                      <span className="text-[#a5d6ff]">"</span>
                      <span className="text-[#8b949e]">,</span>
                    </motion.button>
                  ))}
                </nav>
                <div className="font-mono text-xs text-[#8b949e] mt-3 ml-0">
                  <span className="text-[#8b949e]">];</span>
                </div>
              </div>

              {/* Bottom section with logo */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#30363d]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo-3it.png"
                      alt="3IT Logo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="font-mono text-xs text-[#58a6ff] font-bold">3IT</span>
                  </div>
                  <div className="font-mono text-xs text-[#8b949e]">
                    <span className="text-[#7ee787]">✓</span> Ready
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
