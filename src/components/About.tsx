'use client';

import { motion } from 'framer-motion';
import { GitBranch, Calendar, Users, Target } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '2025', label: 'Год основания', color: '#58a6ff' },
  { icon: Users, value: '3+', label: 'Специалистов', color: '#7ee787' },
  { icon: Target, value: '100%', label: 'Отдача', color: '#d2a8ff' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#7ee787]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e] mb-6">
              <GitBranch className="w-3 h-3 text-[#7ee787]" />
              main
            </div>

            <h2 className="font-unbounded text-4xl sm:text-5xl font-bold text-white mb-8">
              О компании
            </h2>

            {/* Terminal-style content */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
                <span className="ml-2 text-xs font-mono text-[#8b949e]">README.md</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-[#8b949e] mb-4">
                  <span className="text-[#d2a8ff]"># </span>
                  <span className="text-white font-semibold">ООО «ТРИАЙТИ»</span>
                </p>
                <p className="text-[#8b949e] mb-4">
                  Молодая IT-компания, основанная в августе 2025 года в Ставропольском крае.
                </p>
                <p className="text-[#8b949e] mb-4">
                  <span className="text-[#d2a8ff]">## </span>
                  <span className="text-white">Специализация</span>
                </p>
                <p className="text-[#8b949e] mb-4">
                  Разработка программного обеспечения и полный спектр IT-услуг: от веб-разработки до создания мобильных приложений.
                </p>
                <p className="text-[#8b949e]">
                  <span className="text-[#d2a8ff]">## </span>
                  <span className="text-white">Миссия</span>
                </p>
                <p className="text-[#8b949e]">
                  Помогать бизнесу расти с помощью современных технологических решений.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-[#58a6ff] transition-colors group"
                >
                  <div
                    className="flex-shrink-0 p-4 rounded-lg border border-[#30363d] group-hover:border-[#58a6ff] transition-colors"
                    style={{ backgroundColor: `${stat.color}10` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-4xl font-mono font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#8b949e]">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Git commit style info */}
            <div className="mt-6 p-4 bg-[#161b22] border border-[#30363d] rounded-xl">
              <div className="flex items-center gap-3 text-xs font-mono text-[#8b949e]">
                <span className="text-[#7ee787]">●</span>
                <span>Последний коммит: </span>
                <span className="text-white">feat: запуск компании</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#8b949e] mt-2">
                <span className="w-3" />
                <span>Дата: август 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
