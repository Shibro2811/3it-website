'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileJson, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface RequisiteItem {
  readonly key: string;
  readonly label: string;
  readonly value: string;
  readonly isString?: boolean;
}

const requisites: readonly RequisiteItem[] = [
  { key: 'название', label: 'Название', value: 'ООО «ТРИАЙТИ»', isString: true },
  { key: 'инн', label: 'ИНН', value: '2630054680' },
  { key: 'кпп', label: 'КПП', value: '263001001' },
  { key: 'огрн', label: 'ОГРН', value: '1252600011355' },
  { key: 'оквэд', label: 'ОКВЭД', value: '62.01', isString: true },
  { key: 'адрес', label: 'Юридический адрес', value: '357204, Ставропольский край, Минераловодский р-н, х Красный Пахарь, Автомобильная ул, стр. 31', isString: true },
];

function CopyButton({ text }: { readonly text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-[#21262d] transition-colors group"
      title="Копировать"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#7ee787]" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-[#8b949e] group-hover:text-white" />
      )}
    </button>
  );
}

export default function Requisites() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="requisites" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#8b949e] mb-6">
            <span className="text-[#7ee787]">$</span> cat company.json
          </div>

          <h2 className="font-unbounded text-3xl sm:text-4xl font-bold text-white mb-4">
            Реквизиты
          </h2>
          <p className="text-[#8b949e] max-w-xl mx-auto">
            Юридическая информация о компании
          </p>

          {/* Animated underline */}
          <motion.div
            className="mt-6 h-1 mx-auto rounded-full bg-gradient-to-r from-[#58a6ff] via-[#7ee787] to-[#d2a8ff]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* JSON Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* macOS Window */}
          <div className="bg-[#161b22] rounded-xl overflow-hidden border border-[#30363d]">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-2 text-xs font-mono text-[#8b949e]">company.json</span>
              </div>
              <div className="flex items-center gap-1">
                <FileJson className="w-4 h-4 text-[#8b949e]" />
              </div>
            </div>

            {/* JSON Content */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              {/* Opening brace */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="text-[#30363d] select-none w-8">1</span>
                <span className="text-[#8b949e]">{'{'}</span>
              </motion.div>

              {/* Requisites */}
              {requisites.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start group"
                >
                  <span className="text-[#30363d] select-none w-8 flex-shrink-0">{index + 2}</span>
                  <div className="flex-1 ml-4 flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="text-[#7ee787]">"{item.key}"</span>
                      <span className="text-[#8b949e]">: </span>
                      {item.isString ? (
                        <span className="text-[#a5d6ff] break-all">"{item.value}"</span>
                      ) : (
                        <span className="text-[#ffa657]">{item.value}</span>
                      )}
                      {index < requisites.length - 1 && <span className="text-[#8b949e]">,</span>}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      <CopyButton text={item.value} />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Closing brace */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="flex items-center"
              >
                <span className="text-[#30363d] select-none w-8">{requisites.length + 2}</span>
                <span className="text-[#8b949e]">{'}'}</span>
              </motion.div>
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#58a6ff]/10 via-transparent to-[#7ee787]/10 rounded-xl blur-xl -z-10" />
        </motion.div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-xs text-[#8b949e] font-mono"
        >
          // Наведите на строку, чтобы скопировать значение
        </motion.p>
      </div>
    </section>
  );
}
