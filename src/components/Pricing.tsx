'use client';

import { motion, useInView } from 'framer-motion';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import { useRef } from 'react';

interface PricingTier {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly icon: typeof Zap;
  readonly color: string;
  readonly popular?: boolean;
}

const pricingTiers: readonly PricingTier[] = [
  {
    name: 'Лендинг',
    price: '50 000',
    period: '₽',
    description: 'Одностраничный сайт для вашего продукта или услуги',
    features: [
      'Адаптивный дизайн',
      'До 5 секций',
      'Форма обратной связи',
      'SEO оптимизация',
      'Срок: 5-7 дней',
    ],
    icon: Zap,
    color: '#58a6ff',
  },
  {
    name: 'Корпоративный сайт',
    price: '120 000',
    period: '₽',
    description: 'Многостраничный сайт для вашего бизнеса',
    features: [
      'До 10 страниц',
      'Уникальный дизайн',
      'CMS система',
      'Интеграция с CRM',
      'Аналитика',
      'Срок: 2-3 недели',
    ],
    icon: Rocket,
    color: '#7ee787',
    popular: true,
  },
  {
    name: 'Веб-приложение',
    price: 'от 250 000',
    period: '₽',
    description: 'Сложные веб-системы и SaaS решения',
    features: [
      'Индивидуальная разработка',
      'Личный кабинет',
      'API интеграции',
      'База данных',
      'Техподдержка',
      'Срок: от 1 месяца',
    ],
    icon: Building2,
    color: '#d2a8ff',
  },
];

function PricingCard({ tier, index }: { readonly tier: PricingTier; readonly index: number }) {
  const Icon = tier.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative group ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="px-4 py-1 rounded-full text-xs font-mono font-semibold bg-[#7ee787] text-[#0d1117]">
            Популярный
          </div>
        </motion.div>
      )}

      {/* macOS Window */}
      <div
        className="relative bg-[#161b22] rounded-xl overflow-hidden border transition-all duration-500"
        style={{
          borderColor: tier.popular ? tier.color : '#30363d',
          boxShadow: tier.popular ? `0 0 40px ${tier.color}20` : 'none'
        }}
      >
        {/* Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 text-xs font-mono text-[#8b949e]">pricing/{tier.name.toLowerCase().replace(' ', '-')}.json</span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Icon & Name */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${tier.color}20` }}
            >
              <Icon className="w-5 h-5" style={{ color: tier.color }} />
            </div>
            <h3 className="text-xl font-bold text-white">{tier.name}</h3>
          </div>

          {/* Price as code */}
          <div className="mb-4 p-4 bg-[#0d1117] rounded-lg border border-[#30363d]">
            <div className="font-mono text-sm">
              <span className="text-[#8b949e]">{'{'}</span>
              <div className="ml-4">
                <span className="text-[#7ee787]">"price"</span>
                <span className="text-[#8b949e]">: </span>
                <span className="text-[#ffa657]">{tier.price}</span>
                <span className="text-[#8b949e]">,</span>
              </div>
              <div className="ml-4">
                <span className="text-[#7ee787]">"currency"</span>
                <span className="text-[#8b949e]">: </span>
                <span className="text-[#a5d6ff]">"{tier.period}"</span>
              </div>
              <span className="text-[#8b949e]">{'}'}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#8b949e] text-sm mb-6">{tier.description}</p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {tier.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-sm"
              >
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: tier.color }} />
                <span className="text-[#c9d1d9]">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: tier.popular ? tier.color : 'transparent',
              color: tier.popular ? '#0d1117' : tier.color,
              border: `1px solid ${tier.color}`,
            }}
          >
            Заказать
          </motion.button>
        </div>

        {/* Hover Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{ boxShadow: `inset 0 0 40px ${tier.color}10` }}
        />
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0d1117] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#58a6ff]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#7ee787]/5 rounded-full blur-[120px]" />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e] mb-6">
            <span className="text-[#7ee787]">$</span> cat pricing.json
          </div>

          <h2 className="font-unbounded text-4xl sm:text-5xl font-bold text-white mb-4">
            Тарифы
          </h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto">
            Прозрачные цены на разработку веб-проектов
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-1 mx-auto rounded-full bg-gradient-to-r from-[#58a6ff] via-[#7ee787] to-[#d2a8ff]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 150 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        {/* Custom Project Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#161b22] border border-[#30363d] rounded-full">
            <span className="text-[#8b949e] text-sm font-mono">
              // Нужен индивидуальный расчёт?
            </span>
            <button
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#58a6ff] text-sm font-semibold hover:underline"
            >
              Свяжитесь с нами
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
