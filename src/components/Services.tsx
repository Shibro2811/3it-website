'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Lightbulb, Cog, LucideIcon, Play, Terminal } from 'lucide-react';
import { useRef } from 'react';

interface Service {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
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
    features: ['React / Next.js', 'Адаптивный дизайн', 'SEO оптимизация', 'Быстрая загрузка'],
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
    features: ['iOS / Android', 'React Native', 'Push-уведомления', 'Офлайн-режим'],
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
    features: ['Аудит систем', 'Архитектура', 'Оптимизация', 'Масштабирование'],
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
    features: ['CRM системы', 'Автоматизация', 'API интеграции', 'Базы данных'],
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
    <div className="font-mono text-[11px] sm:text-[13px] leading-relaxed">
      {code.map((line, lineIndex) => (
        <div key={lineIndex} className="flex">
          <span className="text-[#484f58] select-none w-5 sm:w-6 text-right mr-3 sm:mr-4">
            {lineIndex + 1}
          </span>
          <span className="text-[#c9d1d9]">
            {highlightSyntax(displayedLines[lineIndex] || '')}
            {lineIndex === currentLine && !isTypingComplete && (
              <motion.span
                className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-[#58a6ff] ml-0.5"
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsRunning(true), index * 300 + 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => setShowOutput(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [isRunning]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative bg-[#161b22] rounded-lg sm:rounded-xl overflow-hidden border border-[#30363d] hover:border-[#484f58] transition-all duration-300">
        {/* Service Header - Always Visible */}
        <div className="p-4 sm:p-6 border-b border-[#30363d]">
          <div className="flex items-start gap-3 sm:gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
              className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
              style={{ backgroundColor: `${service.color}15` }}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: service.color }} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{service.title}</h3>
              <p className="text-[#8b949e] text-xs sm:text-sm">{service.description}</p>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {service.features.map((feature, i) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md border"
                style={{
                  color: service.color,
                  borderColor: `${service.color}40`,
                  backgroundColor: `${service.color}10`
                }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Code Window */}
        <div className="bg-[#0d1117]">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
            <div className="flex items-center gap-2">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-mono text-[#8b949e] ml-2">{service.fileName}</span>
            </div>

            {/* Run Button */}
            <motion.div
              className="flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono"
              style={{ color: service.color }}
            >
              {isRunning ? (
                <>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: service.color }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="hidden sm:inline">Running</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span className="hidden sm:inline">Run</span>
                </>
              )}
            </motion.div>
          </div>

          {/* Code Editor */}
          <div className="p-4 min-h-[160px] sm:min-h-[180px]">
            <TypingCode code={service.code} isVisible={isRunning} />
          </div>

          {/* Terminal Output */}
          <motion.div
            className="border-t border-[#30363d] bg-[#0d1117]"
            initial={{ height: 0, opacity: 0 }}
            animate={showOutput ? { height: 'auto', opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
              <Terminal className="w-3 h-3 text-[#8b949e]" />
              <span className="text-xs font-mono text-[#8b949e]">Output</span>
            </div>
            <div className="px-4 py-3">
              <motion.div
                className="font-mono text-xs sm:text-sm"
                style={{ color: service.color }}
                initial={{ opacity: 0, x: -10 }}
                animate={showOutput ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                {service.output}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Border Glow on Hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${service.color}30`
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
    <section id="services" className="relative py-16 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0d1117] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#58a6ff]/5 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#7ee787]/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[10px] sm:text-xs font-mono text-[#8b949e] mb-4 sm:mb-6">
            <span className="text-[#7ee787]">$</span> cat services.json
          </div>

          <h2 className="font-unbounded text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
            Наши услуги
          </h2>
          <p className="text-[#8b949e] text-sm sm:text-base max-w-2xl mx-auto px-4">
            Полный спектр IT-услуг для развития вашего бизнеса
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-1 mx-auto rounded-full bg-gradient-to-r from-[#58a6ff] via-[#7ee787] to-[#d2a8ff]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 150 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
