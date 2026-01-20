'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, CheckCircle, Terminal } from 'lucide-react';

interface FormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacts" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-[#58a6ff]/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[10px] sm:text-xs font-mono text-[#8b949e] mb-4 sm:mb-6">
            <Terminal className="w-3 h-3 text-[#7ee787]" />
            ./contact.sh
          </div>

          <h2 className="font-unbounded text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
            Связаться с нами
          </h2>
          <p className="text-[#8b949e] text-sm sm:text-base px-4">
            Расскажите о вашем проекте, и мы свяжемся с вами
          </p>
        </motion.div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 sm:py-16"
          >
            <div className="inline-flex p-3 sm:p-4 rounded-full bg-[#238636]/20 mb-4 sm:mb-6">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#7ee787]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Сообщение отправлено!
            </h3>
            <p className="text-[#8b949e] font-mono text-xs sm:text-sm">
              $ echo &quot;Мы свяжемся с вами в ближайшее время&quot;
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Mac Window Form */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg sm:rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#21262d] border-b border-[#30363d]">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27ca3f]" />
                <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs font-mono text-[#8b949e]">new_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-mono text-[#8b949e] mb-1.5 sm:mb-2">
                      <span className="text-[#ff7b72]">const</span> name =
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md sm:rounded-lg bg-[#0d1117] border border-[#30363d] text-white text-sm sm:text-base font-mono placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] transition-colors"
                      placeholder="&quot;Ваше имя&quot;"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-mono text-[#8b949e] mb-1.5 sm:mb-2">
                      <span className="text-[#ff7b72]">const</span> email =
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md sm:rounded-lg bg-[#0d1117] border border-[#30363d] text-white text-sm sm:text-base font-mono placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] transition-colors"
                      placeholder="&quot;email@example.com&quot;"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-mono text-[#8b949e] mb-1.5 sm:mb-2">
                    <span className="text-[#ff7b72]">const</span> message =
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md sm:rounded-lg bg-[#0d1117] border border-[#30363d] text-white text-sm sm:text-base font-mono placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] transition-colors resize-none"
                    placeholder="&quot;Расскажите о вашем проекте...&quot;"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-2 sm:pt-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-[#8b949e]">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-mono">Ставропольский край, Россия</span>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#7ee787]/10 text-[#7ee787] font-mono text-sm rounded-md sm:rounded-lg border border-[#7ee787]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#7ee787]/20 hover:border-[#7ee787] hover:shadow-[0_0_20px_rgba(126,231,135,0.2)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7ee787]"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <span>Отправка...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Отправить</span>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
