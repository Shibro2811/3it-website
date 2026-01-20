'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal } from 'lucide-react';

const codeLines = [
  { type: 'comment', text: '// Создаём цифровое будущее' },
  { type: 'keyword', text: 'const ' },
  { type: 'variable', text: 'company' },
  { type: 'default', text: ' = ' },
  { type: 'string', text: '"3IT"' },
  { type: 'default', text: ';' },
];

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Swift'];

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines((prev) => (prev < codeLines.length ? prev + 1 : prev));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0d1117]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#58a6ff]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7ee787]/5 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d]">
            <Terminal className="w-4 h-4 text-[#7ee787]" />
            <span className="text-sm font-mono text-[#8b949e]">IT-компания нового поколения</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="font-unbounded text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Создаём цифровое
          </h1>
          <h1 className="font-unbounded text-5xl sm:text-6xl lg:text-7xl font-bold text-[#58a6ff]">
            будущее
          </h1>
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-lg mb-10"
        >
          <div className="mac-window">
            <div className="mac-header">
              <div className="mac-dot mac-dot-red" />
              <div className="mac-dot mac-dot-yellow" />
              <div className="mac-dot mac-dot-green" />
              <span className="mac-title">main.ts</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="flex">
                <span className="text-[#30363d] select-none w-8">1</span>
                <span className="text-[#8b949e]">{"// Создаём цифровое будущее"}</span>
              </div>
              <div className="flex">
                <span className="text-[#30363d] select-none w-8">2</span>
                <span>
                  <span className="text-[#ff7b72]">const</span>
                  <span className="text-[#c9d1d9]"> company</span>
                  <span className="text-[#c9d1d9]"> = </span>
                  <span className="text-[#a5d6ff]">&quot;3IT&quot;</span>
                  <span className="text-[#c9d1d9]">;</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-[#30363d] select-none w-8">3</span>
                <span>
                  <span className="text-[#ff7b72]">const</span>
                  <span className="text-[#c9d1d9]"> mission</span>
                  <span className="text-[#c9d1d9]"> = </span>
                  <span className="text-[#a5d6ff]">&quot;качество и надёжность&quot;</span>
                  <span className="text-[#c9d1d9]">;</span>
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-[#30363d] select-none w-8">4</span>
                <span className="text-[#7ee787]">▋</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 max-w-2xl text-center text-lg text-[#8b949e]"
        >
          Разрабатываем программные решения с фокусом на качество и надёжность.
          Воплощаем идеи в реальность с использованием передовых технологий.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="px-3 py-1 text-sm font-mono bg-[#161b22] border border-[#30363d] rounded-md text-[#8b949e] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#238636] hover:bg-[#2ea043] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(46,160,67,0.4)]"
          >
            Связаться с нами
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: '2025', label: 'Год основания' },
            { value: '3+', label: 'Специалистов' },
            { value: '∞', label: 'Возможностей' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-mono font-bold text-[#58a6ff]">{stat.value}</div>
              <div className="text-sm text-[#8b949e] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-8 w-8 text-[#8b949e] hover:text-[#58a6ff] transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
