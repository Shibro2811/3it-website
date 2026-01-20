'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly username: string;
  readonly email: string;
  readonly image: string;
  readonly description?: string;
  readonly previousWork?: string[];
}

const teamMembers: readonly TeamMember[] = [
  {
    name: 'Охтов Хасан',
    role: 'Генеральный директор',
    username: 'khasan',
    email: 'kohtov@threeit.ru',
    image: '/images/kokhtov.png',
    description: 'Начинал карьеру как разработчик, но со временем нашёл своё призвание на стыке технологий и агропромышленного сектора. Погрузившись в сферу растениеводства, я увидел огромный потенциал для цифровой трансформации отрасли. Сегодня занимаюсь цифровизацией сельскохозяйственных предприятий — помогаю внедрять современные IT-решения, которые делают аграрный бизнес эффективнее и прозрачнее.\n\nВне работы люблю играть на музыкальных инструментах — сейчас учусь играть на барабанах, чтобы снимать стресс.',
    previousWork: ['МТС']
  },
  {
    name: 'Ширинов Ибрагим',
    role: 'Операционный директор',
    username: 'ibra',
    email: 'ishirinov@three.ru',
    image: '/images/ishirinov.png',
    description: 'Мой путь начался в Сбере, но страсть к сельскому хозяйству в итоге взяла верх. Я всегда интересовался этой сферой, хотя и не понимал её до конца — это любопытство привело меня в цифровой агросектор, где сегодня я работаю операционным директором.\n\nКогда я не занят управлением процессами, меня можно найти на футбольном поле или за столом для настольного тенниса. Кроме того, я люблю соревновательный азарт и входил в списки лучших игроков мира в Valorant, Fortnite и Marvel Rivals.',
    previousWork: ['Сбер']
  },
  {
    name: 'Аров Анвар',
    role: 'Технический директор',
    username: 'anvar',
    email: 'aarov@threeit.ru',
    image: '/images/aarov.jpg',
    description: 'Свой путь в индустрии я начинал в компаниях Связной и Ак Барс Банк, после чего перешел в Тинькофф на позицию мобильного разработчика. Накопленный в крупном финтехе опыт помог мне осознать, что я хочу применять свои навыки для решения задач в реальном секторе экономики. Именно это желание трансформировать традиционные процессы с помощью технологий привело меня в агротех-стартап, где инновации создают осязаемый и масштабный результат.\n\nВне работы я большой поклонник футбола и стараюсь не пропускать важные матчи.',
    previousWork: ['Тинькофф', 'Связной']
  },
];

function TeamCard({ member, index }: { readonly member: TeamMember; readonly index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group h-full flex flex-col"
    >
      {/* Mac Window Style Card */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff] transition-colors flex-1 flex flex-col shadow-lg">
        <div className="flex items-center gap-2 px-4 py-2.5 sm:py-3 bg-[#21262d] border-b border-[#30363d]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
          <span className="ml-2 text-xs font-mono text-[#8b949e]">@{member.username}</span>
        </div>

        <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col">
          {/* Avatar */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-[#30363d] group-hover:border-[#58a6ff] transition-colors overflow-hidden shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-2.5">
              {member.name}
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-[#21262d] border border-[#30363d] mb-2.5 sm:mb-3">
              <span className="text-xs sm:text-sm font-mono text-[#7ee787]">{member.role}</span>
            </div>
            <a
              href={`mailto:${member.email}`}
              className="block text-xs sm:text-sm font-mono text-[#58a6ff] hover:text-[#79c0ff] transition-colors break-all"
            >
              {member.email}
            </a>
          </div>

          {/* Previous Work Badge */}
          {member.previousWork && member.previousWork.length > 0 && (
            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-[#0d1117] border border-[#30363d] rounded-md">
                <span className="text-[10px] sm:text-xs font-mono text-[#8b949e]">prev:</span>
                <span className="text-[10px] sm:text-xs font-mono text-[#d2a8ff] font-semibold">
                  {member.previousWork.join(', ')}
                </span>
              </div>
            </div>
          )}

          {/* Description */}
          {member.description && (
            <div className="mt-4 sm:mt-5 p-4 sm:p-5 bg-[#0d1117] border border-[#30363d] rounded-lg">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <span className="text-xs font-mono text-[#8b949e] mt-0.5 flex-shrink-0">//</span>
                <p className="text-xs sm:text-sm leading-relaxed sm:leading-loose text-[#8b949e] text-left whitespace-pre-line">
                  {member.description}
                </p>
              </div>
            </div>
          )}

          {/* Contribution Graph Style */}
          <div className="mt-auto pt-5 sm:pt-6 flex justify-center gap-1">
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
    <section id="team" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#d2a8ff]/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e] mb-4 sm:mb-6">
            <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            contributors
          </div>

          <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 px-2">
            Наша команда
          </h2>
          <p className="text-[#8b949e] text-sm sm:text-base max-w-2xl mx-auto px-4">
            Профессионалы, создающие качественные решения
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch max-w-sm md:max-w-none mx-auto">
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
          className="mt-8 sm:mt-10 lg:mt-12 flex justify-center px-4"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 py-3 sm:py-3.5 bg-[#161b22] border border-[#30363d] rounded-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#7ee787]" />
              <span className="text-[#8b949e] font-mono">3 contributors</span>
            </div>
            <div className="w-px h-4 bg-[#30363d]" />
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-[#8b949e] font-mono">∞ commits</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
