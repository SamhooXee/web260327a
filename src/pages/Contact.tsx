/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Globe, 
  Share2, 
  Hub,
  ArrowUpRight
} from "lucide-react";

export const Contact = () => {
  return (
    <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <header className="mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label text-primary uppercase tracking-[0.2em] text-sm mb-4 block font-semibold"
        >
          取得联系
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-glow mb-6 text-on-surface"
        >
          连接星空
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl mx-auto text-lg"
        >
          我们的专业协议团队随时待命，旨在促进您的全球参与并解答技术咨询。
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface-container-high rounded-xl p-8 glass-panel shadow-[0_20px_50px_rgba(8,13,34,0.4)] border border-outline-variant/10"
          >
            <h3 className="font-headline text-2xl font-bold text-primary mb-8">总部</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-1">全球枢纽</p>
                  <p className="text-on-surface font-medium leading-relaxed">
                    Celestial 广场 12 号, 88 层<br />
                    外交区, 新加坡 018982
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-1">电子邮件</p>
                  <p className="text-on-surface font-medium">protocol@astraglobal.intl</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-1">电话</p>
                  <p className="text-on-surface font-medium">+65 6712 8000</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container rounded-xl p-8 border border-outline-variant/20"
          >
            <h3 className="font-headline text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <Clock className="text-secondary" size={20} /> 营业时间
            </h3>
            <div className="space-y-4 font-body text-sm">
              <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                <span className="text-on-surface-variant">周一 — 周五</span>
                <span className="text-on-surface font-semibold">09:00 - 18:00 SGT</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                <span className="text-on-surface-variant">星期六</span>
                <span className="text-on-surface font-semibold">10:00 - 14:00 SGT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">星期日</span>
                <span className="text-secondary font-medium">仅限远程支持</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[Globe, Share2].map((Icon, idx) => (
              <motion.a 
                key={idx}
                whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}
                className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant transition-all duration-300 cursor-pointer"
                href="#"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface-container rounded-xl p-8 lg:p-12 border border-outline-variant/10 relative overflow-hidden"
          >
            {/* Subtle Glow Ornament */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-primary font-bold">姓名</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container" 
                    placeholder="您的姓名" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-primary font-bold">电子邮件</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container" 
                    placeholder="email@organization.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-primary font-bold">主题</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all appearance-none">
                  <option>常规咨询</option>
                  <option>活动注册</option>
                  <option>演讲提案</option>
                  <option>合作伙伴机会</option>
                  <option>新闻与媒体</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-primary font-bold">您的留言</label>
                <textarea 
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container resize-none" 
                  placeholder="我们能为您全球之旅提供什么帮助？" 
                  rows={6}
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 rounded-xl font-headline font-extrabold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20" 
                type="submit"
              >
                发送咨询
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-20">
        <div className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl h-[450px] relative group">
          <img 
            alt="Abstract dark stylized map of a metropolitan city grid" 
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrqWwTZfEUDFo1uzS21tSYz5yZRa6k6wkNplvHWeO4loexuJvAPvfW9zNt5-VT7YfHHbAYU6HC0qalbYA0ZZG1uBCPqWIODsinIY0QWn2aRCOj9kFDLEbkyKQz3L3ciNeTEn7NSLR4C-1FXj51ozQICP1-ycHBhUoYF-AWR6wcK6EBy98OkONZm-negD6cQ2ioVbqSOkHjEW_MUYWQC8vuOk0nqqtlbTCsaVypBtgDsyETcBoKMq9Qs5czFP0mBaTHI05j33p_JC0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
          
          {/* Floating Map Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 glass-panel p-6 rounded-xl border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="font-headline font-bold text-on-surface">Astra Global 总部</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
              坐落于国际金融中心的心脏地带，可通过星际班车和城市轨道交通到达。
            </p>
            <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              获取路线 <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
