/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Globe, 
  Target, 
  Shield, 
  Zap, 
  ArrowRight,
  Users,
  Award,
  History
} from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Target className="text-primary" size={32} />,
      title: "卓越愿景",
      description: "我们致力于通过最高标准的专业培训和外交协作，为全球领导者提供应对复杂挑战的战略视野。"
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      title: "诚信基石",
      description: "在国际关系中，诚信是合作的基石。我们坚持透明、公正的原则，构建持久的信任纽带。"
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "创新驱动",
      description: "利用尖端科技与前瞻性思维，我们不断优化全球治理框架，开拓跨文化交流的新边疆。"
    }
  ];

  const milestones = [
    { year: "2018", event: "Astra Global 在新加坡成立，确立全球外交协作愿景。" },
    { year: "2020", event: "启动首个“全球领导力”混合培训项目，覆盖30多个国家。" },
    { year: "2022", event: "在日内瓦设立欧洲总部，深化与国际组织的战略合作。" },
    { year: "2024", event: "成功举办首届“星际未来”峰会，校友网络突破1.2万人。" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Stunning earth from space" 
            className="w-full h-full object-cover opacity-60 scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjpyOJTmB95PvTp2FuO6qGAvyYG9-k9sjqY7mjdKob35YvmjobqieesjrQbFcVdpP1slvkTEux_4cZrrC7eAoV_iaFVNT6shRzrF3ncDdfiId8AExHLTCczFmWvytMllH7w0iwx3Jbg3CFcK0FLJtdMEDTdfvB1AtciaEqdYbDOIE2fYUEJuvtP5y_9hWpTrQByk00TIXSzkmnZrkLse42-2bzqjt8PX-bDIZltm9j7BtGdx67rzkdYO2Jdyty5WefDJ6NhN_U0Gc"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-surface-container-lowest/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block label-md text-primary tracking-[0.2rem] uppercase mb-6"
          >
            外交与全球领导力
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-6xl md:text-8xl font-extrabold text-on-surface leading-none mb-8 tracking-tighter text-glow"
          >
            开拓下一个 <br /> <span className="text-primary italic">全球边疆</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Astra Global 是国际协作的首要纽带，为未来的领导者提供精英级培训和世界一流的会议。
          </motion.p>
        </div>
      </header>

      <main className="space-y-32 pb-32">
        {/* Mission Section */}
        <section className="py-32 relative bg-surface">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-lg overflow-hidden border border-outline-variant/10 shadow-2xl">
                <img 
                  alt="Global delegates" 
                  className="w-full aspect-[4/5] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp8In1s6vvH7aCEsQEZTHVtbyK-1sf9nI1MM3IGZvJWyoPTia04m97WuCX1sFe8sUJf0ekWiewZmRPL1rvH5WGJYCp7u7RsTfE9mabX4AxIOsaygDdRxixYvmaItYlV3W15uYnxeLdD6PkTL6ItK5P1cAom1PYUogOVKneHPmdebcysQNpwQaesCgNKN9JqYr1eEDoizjTIDlO8boqWOJGcFZjLBIBQzkfD4AGF3ss2d5e_BHLCOO8YEBE0aCUAKyrPMBG-c8_7Os"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="label-md text-primary uppercase tracking-widest block mb-4">我们的使命</span>
              <h2 className="font-headline text-5xl font-bold text-on-surface mb-8 leading-tight">通过卓越与创新 <br /> 架起文化桥梁</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>在 Astra Global，我们相信 21 世纪的复杂性需要一种全新的国际参与框架。我们的使命是为跨文化才华的绽放提供必要的空间和工具。</p>
                <p>通过我们严谨策划的项目，我们汇聚了来自东西方最敏锐的头脑，以应对全球化时代最紧迫的挑战。</p>
              </div>
              <div className="mt-12 flex items-center gap-8 border-t border-outline-variant/20 pt-12">
                <div>
                  <div className="text-3xl font-headline font-extrabold text-primary">50+</div>
                  <div className="label-sm text-on-surface-variant uppercase mt-1">代表国家</div>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div>
                  <div className="text-3xl font-headline font-extrabold text-primary">12k</div>
                  <div className="label-sm text-on-surface-variant uppercase mt-1">校友网络</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-semibold mb-2 block">核心价值</span>
              <h2 className="font-headline text-5xl font-bold tracking-tight">我们的信念</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-surface-container p-10 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History/Milestones Section */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="label-md text-primary uppercase tracking-widest block mb-4">发展历程</span>
              <h2 className="font-headline text-4xl font-bold mb-6">我们的足迹</h2>
              <p className="text-on-surface-variant mb-8">从最初的愿景到如今的全球影响力，Astra Global 始终坚持卓越。</p>
              <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group">
                查看详细年报 <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
              </button>
            </div>
            <div className="lg:col-span-8 space-y-12">
              {milestones.map((m, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 items-start"
                >
                  <div className="font-headline text-3xl font-extrabold text-primary/40 pt-1">{m.year}</div>
                  <div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant/10 flex-grow">
                    <p className="text-on-surface font-medium">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="bg-surface-container-highest/20 py-32 rounded-3xl mx-8">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <Globe className="text-primary mx-auto mb-8" size={64} />
            <h2 className="font-headline text-4xl font-bold mb-8">加入我们的全球网络</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-12">
              无论您是寻求提升的外交官，还是希望扩展国际业务的企业领袖，Astra Global 都是您理想的合作伙伴。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-background/50 px-6 py-3 rounded-full border border-outline-variant/20">
                <Users className="text-primary" size={18} />
                <span className="text-sm font-medium">12,000+ 活跃校友</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 px-6 py-3 rounded-full border border-outline-variant/20">
                <Award className="text-primary" size={18} />
                <span className="text-sm font-medium">15+ 国际认证</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 px-6 py-3 rounded-full border border-outline-variant/20">
                <History className="text-primary" size={18} />
                <span className="text-sm font-medium">6年 卓越历程</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
