'use client';

import { motion } from 'framer-motion';
import { User, Github } from 'lucide-react';

interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly username: string;
}

const teamMembers: readonly TeamMember[] = [
  { name: 'Охитов Хасан Эдуардович', role: 'Генеральный директор', username: 'khasan' },
  { name: 'Ширинов Ибрагим Айдынович', role: 'Сооснователь', username: 'ibrahim' },
  { name: 'Аров Анвар Мухамадович', role: 'Сооснователь', username: 'anvar' },
];

function TeamCard({ member, index }: { readonly member: TeamMember; readonly index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      {/* Mac Window Style Card */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg sm:rounded-xl overflow-hidden hover:border-[#58a6ff] transition-colors">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#21262d] border-b border-[#30363d]">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27ca3f]" />
          <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs font-mono text-[#8b949e]">@{member.username}</span>
        </div>

        <div className="p-4 sm:p-6">
          {/* Avatar */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#21262d] border-2 border-[#30363d] flex items-center justify-center group-hover:border-[#58a6ff] transition-colors">
              <User className="w-7 h-7 sm:w-10 sm:h-10 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors" />
            </div>
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className="text-sm sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">
              {member.name}
            </h3>
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#21262d] border border-[#30363d]">
              <span className="text-[10px] sm:text-xs font-mono text-[#7ee787]">{member.role}</span>
            </div>
          </div>

          {/* Contribution Graph Style */}
          <div className="mt-4 sm:mt-6 flex justify-center gap-0.5 sm:gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm"
                style={{
                  backgroundColor: i < 5 ? `rgba(126, 231, 135, ${0.2 + i * 0.15})` : '#21262d',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#d2a8ff]/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[10px] sm:text-xs font-mono text-[#8b949e] mb-4 sm:mb-6">
            <Github className="w-3 h-3" />
            contributors
          </div>

          <h2 className="font-unbounded text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
            Наша команда
          </h2>
          <p className="text-[#8b949e] text-sm sm:text-base max-w-2xl mx-auto px-4">
            Профессионалы, создающие качественные решения
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#161b22] border border-[#30363d] rounded-full">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7ee787]" />
              <span className="text-[#8b949e]">3 contributors</span>
            </div>
            <div className="w-px h-3 sm:h-4 bg-[#30363d]" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <span className="text-[#8b949e]">∞ commits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
