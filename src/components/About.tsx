'use client';

import { motion, useInView } from 'framer-motion';
import { GitBranch, Calendar, Users, Zap } from 'lucide-react';
import { useRef, useState } from 'react';

const stats = [
  { icon: Calendar, value: '2025', label: 'Год основания', color: '#58a6ff' },
  { icon: Users, value: '10+', label: 'Специалистов', color: '#7ee787' },
  { icon: Zap, value: '100%', label: 'Отдача', color: '#d2a8ff' },
];

// Activity levels for a 7x7 grid (49 squares like GitHub)
const activityGrid = [
  [0, 1, 2, 1, 0, 1, 2],
  [1, 2, 3, 2, 1, 2, 3],
  [2, 3, 2, 3, 2, 3, 2],
  [1, 2, 3, 3, 3, 2, 3],
  [2, 3, 2, 3, 3, 3, 2],
  [3, 2, 3, 2, 3, 3, 3],
  [2, 3, 3, 3, 2, 3, 3],
];

// Activity data for tooltips
const activityLabels = [
  ['Нет задач', '2 проекта', '5 задач', '3 задачи', 'Нет задач', '1 проект', '4 задачи'],
  ['2 задачи', '6 задач', '12 задач', '7 задач', '3 задачи', '5 задач', '10 задач'],
  ['4 задачи', '15 задач', '8 задач', '13 задач', '6 задач', '11 задач', '7 задач'],
  ['1 проект', '5 задач', '14 задач', '16 задач', '18 задач', '9 задач', '12 задач'],
  ['3 задачи', '11 задач', '6 задач', '14 задач', '17 задач', '15 задач', '8 задач'],
  ['9 задач', '7 задач', '13 задач', '5 задач', '16 задач', '19 задач', '14 задач'],
  ['4 задачи', '10 задач', '12 задач', '15 задач', '6 задач', '13 задач', '11 задач'],
];

const weekLabels = ['6 нед.', '5 нед.', '4 нед.', '3 нед.', '2 нед.', '1 нед.', 'Эта неделя'];

function getActivityColor(level: number) {
  switch (level) {
    case 0: return '#21262d';
    case 1: return 'rgba(126, 231, 135, 0.3)';
    case 2: return 'rgba(126, 231, 135, 0.6)';
    case 3: return '#7ee787';
    default: return '#21262d';
  }
}

function getActivityLevel(level: number) {
  switch (level) {
    case 0: return 'Нет активности';
    case 1: return 'Низкая активность';
    case 2: return 'Средняя активность';
    case 3: return 'Высокая активность';
    default: return 'Нет активности';
  }
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredSquare, setHoveredSquare] = useState<{ row: number; col: number } | null>(null);

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient */}
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-[#7ee787]/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[10px] sm:text-xs font-mono text-[#8b949e] mb-4 sm:mb-6">
              <GitBranch className="w-3 h-3 text-[#7ee787]" />
              main
            </div>

            <h2 className="font-unbounded text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">
              О компании
            </h2>

            {/* Terminal-style content */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg sm:rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#21262d] border-b border-[#30363d]">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27ca3f]" />
                <span className="ml-2 text-[10px] sm:text-xs font-mono text-[#8b949e]">README.md</span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
                <p className="text-[#8b949e] mb-3 sm:mb-4">
                  <span className="text-[#d2a8ff]"># </span>
                  <span className="text-white font-semibold">ООО «ТРИАЙТИ»</span>
                </p>
                <p className="text-[#8b949e] mb-3 sm:mb-4 text-[11px] sm:text-sm">
                  Молодая IT-компания, основанная в августе 2025 года в Ставропольском крае.
                </p>
                <p className="text-[#8b949e] mb-3 sm:mb-4">
                  <span className="text-[#d2a8ff]">## </span>
                  <span className="text-white">Специализация</span>
                </p>
                <p className="text-[#8b949e] mb-3 sm:mb-4 text-[11px] sm:text-sm">
                  Разработка программного обеспечения и полный спектр IT-услуг: от веб-разработки до создания мобильных приложений.
                </p>
                <p className="text-[#8b949e]">
                  <span className="text-[#d2a8ff]">## </span>
                  <span className="text-white">Миссия</span>
                </p>
                <p className="text-[#8b949e] text-[11px] sm:text-sm">
                  Помогать бизнесу расти с помощью современных технологических решений.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Card (matching README style) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Spacer to align with "О компании" title */}
            <div className="h-[52px] sm:h-[76px]" />

            {/* Stats window matching README style */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg sm:rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#21262d] border-b border-[#30363d]">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27ca3f]" />
                <span className="ml-2 text-[10px] sm:text-xs font-mono text-[#8b949e]">stats.md</span>
              </div>

              <div className="p-4 sm:p-6">
                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <div
                          className="inline-flex p-2 sm:p-2.5 rounded-lg mb-2"
                          style={{ backgroundColor: `${stat.color}15` }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: stat.color }} />
                        </div>
                        <div
                          className="text-xl sm:text-2xl font-mono font-bold"
                          style={{ color: stat.color }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#8b949e]">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="border-t border-[#30363d] mb-5 sm:mb-6" />

                {/* Activity section */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm font-mono text-white mb-1">Активность</div>
                    <div className="text-[10px] sm:text-xs text-[#8b949e] mb-3">Интенсивность работы</div>

                    {/* Legend */}
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#8b949e]">
                      <span>Меньше</span>
                      <div className="flex gap-0.5">
                        {[0, 1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                            style={{ backgroundColor: getActivityColor(level) }}
                          />
                        ))}
                      </div>
                      <span>Больше</span>
                    </div>
                  </div>

                  {/* Activity grid */}
                  <div className="flex flex-col gap-0.5 sm:gap-1 relative">
                    {activityGrid.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex gap-0.5 sm:gap-1">
                        {row.map((level, colIndex) => (
                          <div key={colIndex} className="relative group/activity">
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 0.6 + rowIndex * 0.05 + colIndex * 0.02 }}
                              className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm cursor-pointer transition-all hover:scale-125 hover:ring-1 hover:ring-[#7ee787]"
                              style={{ backgroundColor: getActivityColor(level) }}
                              onMouseEnter={() => setHoveredSquare({ row: rowIndex, col: colIndex })}
                              onMouseLeave={() => setHoveredSquare(null)}
                            />

                            {/* Tooltip */}
                            {hoveredSquare?.row === rowIndex && hoveredSquare?.col === colIndex && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50"
                              >
                                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 shadow-2xl min-w-max">
                                  <div className="text-[10px] sm:text-xs font-mono">
                                    <div className="text-[#7ee787] font-semibold mb-0.5">
                                      {activityLabels[rowIndex][colIndex]}
                                    </div>
                                    <div className="text-[#8b949e] text-[9px] sm:text-[10px]">
                                      {getActivityLevel(level)}
                                    </div>
                                    <div className="text-[#58a6ff] text-[9px] sm:text-[10px] mt-0.5">
                                      {weekLabels[colIndex]}
                                    </div>
                                  </div>
                                  {/* Tooltip arrow */}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                    <div className="border-4 border-transparent border-t-[#30363d]" />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#30363d] my-5 sm:my-6" />

                {/* Status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ee787] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ee787]" />
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-[#7ee787]">Активно развиваемся</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#8b949e]">с 2025</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
