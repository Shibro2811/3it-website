'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Lightbulb, Cog, LucideIcon, Play, Square } from 'lucide-react';
import { useRef } from 'react';

interface Service {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly fileName: string;
  readonly code: readonly string[];
  readonly output: string;
  readonly color: string;
}

const services: readonly Service[] = [
  {
    icon: Code,
    title: 'Веб-разработка',
    description: 'Современные веб-приложения с адаптивным дизайном',
    fileName: 'website.tsx',
    code: [
      'import { createApp } from "3it";',
      '',
      'const Website = () => {',
      '  return <App responsive fast />;',
      '};',
      '',
      'export default Website;',
    ],
    output: '✓ Compiled successfully',
    color: '#58a6ff',
  },
  {
    icon: Smartphone,
    title: 'Мобильные приложения',
    description: 'Нативные приложения для iOS и Android',
    fileName: 'app.swift',
    code: [
      'import SwiftUI',
      '',
      'struct MobileApp: App {',
      '    var body: some Scene {',
      '        WindowGroup {',
      '            ContentView()',
      '        }',
      '    }',
      '}',
    ],
    output: '✓ Build succeeded',
    color: '#7ee787',
  },
  {
    icon: Lightbulb,
    title: 'IT-консалтинг',
    description: 'Техническое консультирование и архитектура',
    fileName: 'consulting.py',
    code: [
      'from consulting import analyze',
      '',
      'def solve(problem):',
      '    solution = analyze(problem)',
      '    return optimize(solution)',
      '',
      'result = solve(your_task)',
      'print(result)',
    ],
    output: '>>> Solution found!',
    color: '#d2a8ff',
  },
  {
    icon: Cog,
    title: 'Индивидуальные решения',
    description: 'Уникальное ПО под ваши бизнес-задачи',
    fileName: 'custom.ts',
    code: [
      'interface Solution {',
      '  features: string[];',
      '  scalable: boolean;',
      '}',
      '',
      'const build = (needs) => {',
      '  return createCustom(needs);',
      '};',
    ],
    output: '✓ Deployed to production',
    color: '#ffa657',
  },
];

function TypingCode({ code, isVisible }: { readonly code: readonly string[]; readonly isVisible: boolean }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedLines([]);
      setCurrentLine(0);
      setCurrentChar(0);
      return;
    }

    if (currentLine >= code.length) return;

    const line = code[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 25);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentLine, currentChar, code]);

  const isTypingComplete = currentLine >= code.length;

  return (
    <div className="font-mono text-[13px] leading-relaxed">
      {code.map((line, lineIndex) => (
        <div key={lineIndex} className="flex">
          <span className="text-[#484f58] select-none w-6 text-right mr-4">
            {lineIndex + 1}
          </span>
          <span className="text-[#c9d1d9]">
            {highlightSyntax(displayedLines[lineIndex] || '')}
            {lineIndex === currentLine && !isTypingComplete && (
              <motion.span
                className="inline-block w-2 h-4 bg-[#58a6ff] ml-0.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

function highlightSyntax(text: string): JSX.Element {
  const keywords = ['import', 'from', 'const', 'let', 'var', 'function', 'return', 'export', 'default', 'interface', 'struct', 'def', 'class', 'var', 'some'];
  const types = ['string', 'boolean', 'number', 'App', 'Scene', 'WindowGroup'];

  const parts = text.split(/(\s+|[{}()[\]:;<>,=])/);

  return (
    <>
      {parts.map((part, i) => {
        if (keywords.includes(part)) {
          return <span key={i} className="text-[#ff7b72]">{part}</span>;
        }
        if (types.includes(part)) {
          return <span key={i} className="text-[#79c0ff]">{part}</span>;
        }
        if (part.startsWith('"') || part.startsWith("'")) {
          return <span key={i} className="text-[#a5d6ff]">{part}</span>;
        }
        if (part.startsWith('//') || part.startsWith('#')) {
          return <span key={i} className="text-[#8b949e]">{part}</span>;
        }
        if (part === '>>>' || part === '✓') {
          return <span key={i} className="text-[#7ee787]">{part}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function ServiceCard({ service, index }: { readonly service: Service; readonly index: number }) {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsRunning(true), index * 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => setShowOutput(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isRunning]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      {/* macOS Window */}
      <div className="relative bg-[#1c2128] rounded-xl overflow-hidden border border-[#30363d] shadow-2xl shadow-black/50 hover:shadow-[0_0_60px_-15px] transition-all duration-500"
        style={{ ['--tw-shadow-color' as string]: `${service.color}30` }}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[#2d333b] to-[#22272e] border-b border-[#30363d]">
          <div className="flex items-center gap-2">
            {/* Traffic Lights */}
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
            >
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c840]" />
            </motion.div>
          </div>

          {/* File Name Tab */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#161b22] rounded-md border border-[#30363d]">
            <Icon className="w-3.5 h-3.5" style={{ color: service.color }} />
            <span className="text-xs font-mono text-[#8b949e]">{service.fileName}</span>
          </div>

          {/* Run Button */}
          <motion.button
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all"
            style={{
              backgroundColor: isRunning ? `${service.color}20` : 'transparent',
              color: service.color,
              border: `1px solid ${service.color}40`
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRunning ? (
              <>
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: service.color }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                Running
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                Run
              </>
            )}
          </motion.button>
        </div>

        {/* Code Editor */}
        <div className="p-5 bg-[#0d1117] min-h-[220px]">
          <TypingCode code={service.code} isVisible={isRunning} />
        </div>

        {/* Terminal Output */}
        <motion.div
          className="border-t border-[#30363d] bg-[#161b22]"
          initial={{ height: 0, opacity: 0 }}
          animate={showOutput ? { height: 'auto', opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#30363d]">
            <Square className="w-3 h-3 text-[#8b949e]" />
            <span className="text-xs font-mono text-[#8b949e]">Terminal</span>
          </div>
          <div className="px-4 py-3">
            <motion.div
              className="font-mono text-sm"
              style={{ color: service.color }}
              initial={{ opacity: 0, x: -10 }}
              animate={showOutput ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {service.output}
            </motion.div>
          </div>
        </motion.div>

        {/* Service Info Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/90 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${service.color}20` }}
            >
              <Icon className="w-5 h-5" style={{ color: service.color }} />
            </div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-[#8b949e] text-sm">{service.description}</p>
        </motion.div>

        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{
            boxShadow: `inset 0 0 60px ${service.color}10, 0 0 40px ${service.color}10`
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0d1117] overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#58a6ff 1px, transparent 1px),
              linear-gradient(90deg, #58a6ff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Moving scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#58a6ff]/50 to-transparent"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, #58a6ff 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7ee787 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Terminal Command Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] mb-8"
          >
            <span className="flex items-center gap-2 text-sm font-mono">
              <span className="text-[#7ee787]">$</span>
              <motion.span
                className="text-[#8b949e]"
                initial={{ width: 0 }}
                animate={isInView ? { width: 'auto' } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                cat services.json
              </motion.span>
              <motion.span
                className="w-2 h-4 bg-[#7ee787]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </span>
          </motion.div>

          <h2 className="font-unbounded text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Наши услуги
          </h2>

          <p className="text-[#8b949e] text-lg max-w-2xl mx-auto">
            Полный спектр IT-услуг для развития вашего бизнеса
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-8 h-1 mx-auto rounded-full bg-gradient-to-r from-[#58a6ff] via-[#7ee787] to-[#d2a8ff]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 200 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
