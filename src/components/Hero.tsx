'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Terminal, Play, Sparkles } from 'lucide-react';

const terminalCommands = [
  { type: 'command', text: 'npx create-3it-project@latest my-app' },
  { type: 'output', text: '' },
  { type: 'output', text: '  ████████╗██████╗ ██╗████████╗' },
  { type: 'output', text: '  ╚══██╔══╝██╔══██╗██║╚══██╔══╝' },
  { type: 'output', text: '     ██║   ██████╔╝██║   ██║' },
  { type: 'output', text: '     ██║   ██╔══██╗██║   ██║' },
  { type: 'output', text: '     ██║   ██║  ██║██║   ██║' },
  { type: 'output', text: '     ╚═╝   ╚═╝  ╚═╝╚═╝   ╚═╝' },
  { type: 'output', text: '' },
  { type: 'success', text: '✓ Создаём цифровое будущее...' },
  { type: 'success', text: '✓ Подключаем передовые технологии...' },
  { type: 'success', text: '✓ Готово к запуску!' },
  { type: 'output', text: '' },
  { type: 'info', text: '→ Веб-разработка    → Мобильные приложения' },
  { type: 'info', text: '→ IT-консалтинг     → Индивидуальные решения' },
];

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Swift', color: '#F05138' },
];

function TypingTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Small delay before starting
    const startDelay = setTimeout(() => {
      if (currentLine >= terminalCommands.length) {
        setIsComplete(true);
        return;
      }

      const line = terminalCommands[currentLine];
      const text = line.text;

      // For command lines, type character by character
      if (line.type === 'command') {
        if (currentChar < text.length) {
          const timer = setTimeout(() => {
            setDisplayedLines(prev => {
              const newLines = [...prev];
              newLines[currentLine] = text.slice(0, currentChar + 1);
              return newLines;
            });
            setCurrentChar(prev => prev + 1);
          }, 15);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }, 300);
          return () => clearTimeout(timer);
        }
      } else {
        // For output lines, show instantly with slight delay
        const timer = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[currentLine] = text;
            return newLines;
          });
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, line.type === 'success' ? 150 : 40);
        return () => clearTimeout(timer);
      }
    }, 400);

    return () => clearTimeout(startDelay);
  }, [isInView, currentLine, currentChar]);

  const getLineColor = (index: number) => {
    const line = terminalCommands[index];
    if (!line) return 'text-[#c9d1d9]';
    switch (line.type) {
      case 'command': return 'text-[#c9d1d9]';
      case 'success': return 'text-[#7ee787]';
      case 'info': return 'text-[#58a6ff]';
      default: return 'text-[#8b949e]';
    }
  };

  return (
    <div ref={ref} className="w-full max-w-2xl">
      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-[#0d1117] rounded-xl overflow-hidden border border-[#30363d] shadow-2xl shadow-black/50"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_#ff5f5750]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_#febc2e50]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_8px_#28c84050]" />
            </div>
            <span className="ml-3 text-xs font-mono text-[#8b949e]">Terminal — zsh</span>
          </div>
          <div className="flex items-center gap-2">
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#238636]/20 border border-[#238636]/50"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#7ee787] animate-pulse" />
                <span className="text-xs font-mono text-[#7ee787]">Ready</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm min-h-[320px] sm:min-h-[360px] overflow-hidden">
          {terminalCommands.map((line, index) => (
            <div key={index} className={`${getLineColor(index)} leading-relaxed`}>
              {line.type === 'command' && (
                <span className="text-[#7ee787]">❯ </span>
              )}
              <span className="whitespace-pre">
                {displayedLines[index] || ''}
              </span>
              {index === currentLine && line.type === 'command' && currentChar < line.text.length && (
                <motion.span
                  className="inline-block w-2 h-4 bg-[#7ee787] ml-0.5 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>
          ))}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2"
            >
              <span className="text-[#7ee787]">❯ </span>
              <motion.span
                className="inline-block w-2 h-4 bg-[#7ee787] align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0d1117]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-50" />
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#58a6ff]/30 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#58a6ff]/8 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7ee787]/8 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#d2a8ff]/5 rounded-full blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d]">
            <Sparkles className="w-4 h-4 text-[#d2a8ff]" />
            <span className="text-sm font-mono text-[#8b949e]">IT-компания нового поколения</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
            Создаём цифровое
          </h1>
          <h1 className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#58a6ff] via-[#7ee787] to-[#d2a8ff] bg-clip-text text-transparent">
              будущее
            </span>
          </h1>
        </motion.div>

        {/* Terminal */}
        <div className="w-full flex justify-center mb-8">
          <TypingTerminal />
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-xl"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: tech.color }}
              className="px-3 py-1.5 text-xs sm:text-sm font-mono bg-[#161b22] border border-[#30363d] rounded-lg text-[#c9d1d9] transition-all cursor-default"
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden px-8 py-4 bg-[#7ee787]/10 text-[#7ee787] font-mono text-base rounded-lg border border-[#7ee787]/50 transition-all hover:bg-[#7ee787]/20 hover:border-[#7ee787] hover:shadow-[0_0_30px_rgba(126,231,135,0.2)]"
          >
            <span className="relative flex items-center gap-3">
              <Play className="w-4 h-4" />
              <span>Начать проект</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 gap-8 sm:gap-16"
        >
          {[
            { value: '2025', label: 'Год основания' },
            { value: '3+', label: 'Специалистов' },
            { value: '∞', label: 'Возможностей' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#58a6ff]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#8b949e] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 p-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-[#8b949e]">scroll</span>
          <ChevronDown className="h-6 w-6 text-[#8b949e] hover:text-[#58a6ff] transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
