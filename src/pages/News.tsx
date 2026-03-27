/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Search,
  Mail,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  User,
  Clock
} from "lucide-react";
import { newsApi } from "../lib/api/news";
import type { News as NewsArticle } from "../lib/types";

export const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    newsApi.getAll().then(setArticles).catch(console.error);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Header */}
      <header className="relative pt-40 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest via-background to-surface opacity-50 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4"
          >
            最新简报
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none max-w-4xl"
          >
            全球外交与 <span className="text-primary">天文盛事</span>
          </motion.h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Featured Article */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-8 bg-surface-container-high">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Satellite view of earth" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqc4oFjWE4SbYADcRkdp7ERYEDQSDWurpNXdux7l4-tsYCkIaXbIpaU-lEqagUVOCMWVOBdR2KzpGWOg7M4v9j9iYmljAqrR9IfkH5QNIVlcW84UrhOcVFcrkqPpdRGGmq5N32h2FLFvgnTshWBwwgk_rzuqYAJ9Tp6P5USNmg0I9ORNLgFir576DdtcbpY6vY3-XikSLQN1Gz_x11786ihju6PNUL7TvVk_Jbtg0oMTs0lsSY0Y7AuIxbefwxUasASNA5GKQBC8s"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-label text-xs text-primary bg-primary-container px-3 py-1 rounded-full">2024峰会</span>
                <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">Oct 24, 2024</span>
              </div>
              <h2 className="font-headline text-3xl font-bold mb-4 group-hover:text-primary transition-colors">星际桥梁：第15届国际银河政策论坛</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">来自七十个国家的代表昨天齐聚阿斯特拉全球中心，批准了第一个关于可持续月球资源开采和深空轨道管理的综合框架。</p>
              <a className="inline-flex items-center text-primary font-bold gap-2 group/link" href="#">
                阅读全文 <ArrowRight className="transition-transform group-hover/link:translate-x-1" size={16} />
              </a>
            </motion.article>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {articles.map((article, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4 group cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden rounded-lg bg-surface-container-high">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      alt={article.title} 
                      src={article.image_url}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="font-label text-xs text-on-surface-variant uppercase tracking-widest">{article.date}</div>
                  <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-3">{article.excerpt}</p>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pt-12 flex justify-center">
              <button className="bg-surface-container-high border border-outline-variant/20 px-12 py-4 rounded-xl font-bold hover:bg-surface-bright transition-all flex items-center gap-3 active:scale-95">
                <ChevronDown size={20} /> 加载更多简报
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Search */}
            <div className="p-8 rounded-xl bg-surface-container-low">
              <h4 className="font-headline text-lg font-bold mb-6">搜索存档</h4>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-lowest border-none rounded-xl py-3 pl-12 focus:ring-2 focus:ring-primary/50 text-sm" 
                  placeholder="关键词..." 
                  type="text"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
              </div>
            </div>

            {/* Categories */}
            <div className="p-8 rounded-xl bg-surface-container-low">
              <h4 className="font-headline text-lg font-bold mb-6">分类</h4>
              <ul className="space-y-3">
                {[
                  { name: "全球政策", count: 24 },
                  { name: "技术", count: 18 },
                  { name: "可持续发展", count: 12 },
                  { name: "空间探索", count: 42 }
                ].map((cat) => (
                  <li key={cat.name}>
                    <a className="flex justify-between items-center group" href="#">
                      <span className="text-on-surface-variant group-hover:text-primary transition-colors">{cat.name}</span> 
                      <span className="text-xs font-label text-on-tertiary-container">{cat.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Archive */}
            <div className="p-8 rounded-xl bg-surface-container-low">
              <h4 className="font-headline text-lg font-bold mb-6">归档</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-on-surface-variant">
                {["2024年9月", "2024年8月", "2024年7月", "2024年6月", "2024年5月", "2024年4月"].map((month) => (
                  <a key={month} className="hover:text-primary transition-colors" href="#">{month}</a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-8 rounded-xl bg-primary-container relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <Mail size={96} />
              </div>
              <h4 className="font-headline text-lg font-bold text-primary mb-2">天体情报</h4>
              <p className="text-xs text-on-primary-container mb-6 leading-relaxed">每周简报国际外交动态和航空航天突破。</p>
              <div className="space-y-4">
                <input 
                  className="w-full bg-surface-container-lowest/50 border-none rounded-lg py-2 px-4 text-xs focus:ring-1 focus:ring-primary outline-none" 
                  placeholder="电子邮箱地址" 
                  type="email"
                />
                <button className="w-full bg-primary text-on-primary py-2 rounded-lg text-sm font-bold active:scale-95 transition-transform">订阅</button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Detailed View Simulation Section */}
      <section className="bg-surface-container-lowest py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <a className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest mb-8 hover:gap-3 transition-all" href="#">
              <ArrowLeft size={14} /> 返回所有新闻
            </a>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6">轨道伦理的未来：峰会后分析</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <User className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold">Dr. Elena Thorne</div>
                  <div className="text-xs text-on-surface-variant">首席政策战略家</div>
                </div>
              </div>
              <div className="h-8 w-px bg-outline-variant/30"></div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <Clock size={16} /> 12分钟阅读
              </div>
            </div>
          </div>

          <div className="max-w-none text-on-surface-variant leading-relaxed space-y-8 text-lg">
            <p>阿斯特拉全球峰会的结束为决策者留下了一幅复杂的法规和抱负。随着我们进入近地轨道空前的私营部门参与时代，传统的“空间法”模式正受到创新速度的严峻考验。</p>
            
            <div className="my-12 aspect-[16/9] rounded-lg overflow-hidden relative">
              <img 
                className="w-full h-full object-cover" 
                alt="Mountain peaks under starry sky" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIl3NRwxVxXOO-QjcUTyU9F-P2X5S3t-ammpAmi8DG4zALfsez7AJPkESuZYkSpu6K8Y7hxwX5wxou5eN-LieBQ_vUDP2SnGWRt8ZqZ9YkKmImXM1QctKqmT480VRkI_bCcxv0PPBE3erAzqW8kXP9Z3WCeFsKZfywtt523i0p5GJIOPb2MQJqJDfey4hnochEyIsN9YUcRwlQRXQ5zxzoR1yCWISPP7RCFToxE2VfxUU0wF5OEHnCvwRHelKaO85fh6hnMGp1zBM"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/60 backdrop-blur-md p-4 rounded-lg">
                <p className="text-xs italic text-on-surface">图1：大气边界监测站的概念可视化。</p>
              </div>
            </div>

            <p>主要挑战仍然是轨道位置的公平分配。从历史上看，“先到先得”是运行准则。然而，2024年的框架引入了“可持续占用”条款，要求运营商证明每一个新卫星部署的长期效用和碎片中性状态。</p>
            
            <blockquote className="border-l-4 border-primary pl-8 py-4 my-12 italic text-2xl text-on-surface font-headline leading-snug">
              “我们不再仅仅是仰望星空；我们正在管理通往星空的道路。外交现在必须像考虑政治一样考虑物理。”
            </blockquote>

            <p>在接下来的几个月里，阿斯特拉全球将带头组建轨道伦理委员会 (OEC)，这是一个非党派机构，任务是仲裁民族国家与私营公司之间关于近地空间“人类共同遗产”的争端。</p>
          </div>

          <div className="mt-20 pt-12 border-t border-outline-variant/20 flex flex-wrap gap-4">
            {["#OrbitalPolicy", "#SpaceEthics", "#AstraSummit", "#FutureTech"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-surface-container-high rounded-lg text-xs font-label text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
