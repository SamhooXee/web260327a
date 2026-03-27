/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Wifi, 
  Languages, 
  Coffee,
  Building2,
  ChevronRight
} from "lucide-react";

export const Conferences = () => {
  const agenda = [
    {
      time: "09:00",
      period: "AM EST",
      title: "主题演讲：主权银河",
      description: "随着人类向大气层外扩张，关于国际法范式转变的开幕致辞。",
      location: "全体会议大厅"
    },
    {
      time: "11:30",
      period: "AM EST",
      title: "神经外交研讨会",
      description: "关于22世纪人工智能调解谈判和跨文化交流的互动会议。",
      location: "A演播室"
    },
    {
      time: "02:00",
      period: "PM EST",
      title: "资源管理小组讨论",
      description: "关于小行星采矿权和为后代保护星际环境的讨论。",
      location: "虚空厅"
    }
  ];

  const speakers = [
    {
      name: "阿利斯泰尔·范斯 博士",
      role: "首席天体生物学家",
      org: "Astra实验室系外行星研究总监",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpqMvJOVDCg-ZduwafeQZekYwDt-8PwojH3iTtP_pYRsPsRi0DiT_KRsn4-XIoK6qdE21VlrSlQ_CWof16JnYeQ7-73sFneCJoIf7dw-xXZqEWmectYNlOx7rPOPT02n_9cgXO4iP7f0DICCSgv3ZYWt1CYu80O2P6trE6SDOJVcuSxxsp5tqw9Gq0TJIvOMYF3EqT3rTeVl2zjvw_KzPnMoLHfK4qcmCUFlBwt5ll-VbU225A6ajgd0heT7VwPswu5yDL0iHgPws"
    },
    {
      name: "艾琳娜·索恩",
      role: "外交使节",
      org: "联合国空间事务特别报告员",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtJdQ_x_KA0ti__d5c5EQUDFnwuIAUbySYhP-SOVGFeJT-_KvGyaafcIre5ocO_6q_tnrOmTdJfPe8Fgz45rR9GSTXlVwmGcxzs43--iGO9I94mjuEG9Bt7KesUDwOKOON0gGJsE1t8CJdfrZL9WwzKr1w3pODjALB6p7kM_CEy-p_OYscmSaMks0nSVmOXHd8afqjxxYKKNNxN6AbPH614Q2VTgZbeZa4EGrMwnYFw-r5bBkj7lQ08seXiVvUbb3dWNfNaGXeod8"
    },
    {
      name: "陈马库斯",
      role: "Zenith Systems 首席技术官",
      org: "星际量子网架构师",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGXmv4myGe94j5alwtX7uVFEKPm7uuckElAlKsQ_PFsB-eNAa2NU6AASlniHAm39BLejdb-HHdI3AuLsQzmCyScOpRJHJxl3eojBHXZb5PeHcdE6FshXAU3kcwd8eRw1pBL2glkedEyDXttYzDTUy7LEhgtMeZ3J211Pv69Xp0sNawGWxOsVBewrxNE_5615ecjX-Ki3HA0bmb2ChhqWZJIwgORP7QVrKpGvWbnRALB-KCpI8uqWysaDxB6WVKDhaMArGhu7bghMk"
    },
    {
      name: "莎拉·科斯蒂奇 博士",
      role: "理论物理学家",
      org: "诺贝尔多维静力学奖得主",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7HoohaMK1CDpStaAKwPZjRQihlYkWBdRYhtF85P-k03Q-iPIMHrogkEOQ0EVVd6gYml5OxpvBPfn4ljqo1FrJBwt7NP2bzUkafeKTC_VUSH6acKoWJm5lpe2EfzgukERpMiVqdfwzCnFtED1HTKCqZ7OXJsZTCWTk3QVsT2eMotBMOmoa5mOw49_rzfwxgDX2bEoM-vB-sRM6imQfx3OdD7ig6ayw3jJntqKwbiOeacRQhy229uBh0OHvudwKFhmqHk-KMeO_vg0"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
          <img 
            className="w-full h-full object-cover opacity-20" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Deep space nebula"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="label-md uppercase tracking-[0.2em] text-primary font-semibold mb-4 block"
          >
            2024年国际峰会
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 max-w-4xl leading-tight"
          >
            星际未来的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-fixed">建筑师</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-xl max-w-2xl leading-relaxed mb-12"
          >
            加入全球顶尖的愿景家、外交官和科技先驱，共同参加为期三天的全球治理与宇宙探索深度研讨。
          </motion.p>
          <div className="flex flex-wrap gap-8 items-center text-sm font-label uppercase tracking-widest text-on-surface-variant">
            <div className="flex items-center gap-3"><Calendar className="text-primary" size={18} /> 2024年11月12-14日</div>
            <div className="flex items-center gap-3"><MapPin className="text-primary" size={18} /> 日内瓦，猎户座展馆</div>
          </div>
        </div>
      </header>

      <main className="space-y-32 pb-32">
        {/* Agenda Section */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="label-md uppercase tracking-[0.2em] text-primary font-semibold mb-2 block">日程表</span>
              <h2 className="font-headline text-4xl font-bold tracking-tight">会议议程</h2>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-surface-container-high rounded-full text-on-surface font-label text-xs uppercase tracking-widest border border-outline-variant/20">第一天</button>
              <button className="px-6 py-2 bg-transparent rounded-full text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors">第二天</button>
              <button className="px-6 py-2 bg-transparent rounded-full text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors">第三天</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-outline-variant/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(8,13,34,0.4)] border border-outline-variant/10">
            {agenda.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "var(--color-surface-container-high)" }}
                className="group bg-surface-container p-8 flex flex-col md:flex-row gap-8 items-start transition-colors"
              >
                <div className="w-32 flex-shrink-0">
                  <span className="font-headline text-2xl font-bold text-primary block">{item.time}</span>
                  <span className="text-xs font-label uppercase tracking-widest text-on-tertiary-container">{item.period}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant max-w-2xl">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-lg bg-surface-container-lowest text-[10px] font-label uppercase tracking-tighter text-secondary border border-secondary/20">
                    {item.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Speakers Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-semibold mb-2 block">思想领导力</span>
              <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">特邀演讲嘉宾</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">会见那些正在重新定义人类潜力和全球合作边界的先驱者。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5] bg-surface-container-highest">
                    <img 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                      src={speaker.image} 
                      alt={speaker.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>
                  <h3 className="font-headline text-xl font-bold">{speaker.name}</h3>
                  <p className="text-primary text-sm font-label uppercase tracking-widest mb-2">{speaker.role}</p>
                  <p className="text-on-surface-variant text-sm">{speaker.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration & Venue Bento Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-8 bg-surface-container p-12 rounded-xl shadow-[0_20px_50px_rgba(8,13,34,0.4)] border border-outline-variant/10">
              <div className="mb-10">
                <h2 className="font-headline text-3xl font-bold mb-2">确保您的席位</h2>
                <p className="text-on-surface-variant">填写注册表，加入星际先锋行列。</p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="label-md uppercase tracking-widest text-primary block">姓名</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container" placeholder="张三" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="label-md uppercase tracking-widest text-primary block">所属机构</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container" placeholder="全球研究院" type="text"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="label-md uppercase tracking-widest text-primary block">职业邮箱</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container" placeholder="j.doe@astra.com" type="email"/>
                  </div>
                  <div className="space-y-2">
                    <label className="label-md uppercase tracking-widest text-primary block">通行证类型</label>
                    <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                      <option>精英全程通行证</option>
                      <option>战略代表</option>
                      <option>虚拟观察员</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="label-md uppercase tracking-widest text-primary block">特殊饮食或无障碍需求</label>
                  <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-tertiary-container" placeholder="请详细说明..." rows={4}></textarea>
                </div>
                <div className="flex items-center gap-4">
                  <input className="rounded bg-surface-container-lowest border-outline-variant/30 text-primary focus:ring-primary/20" id="terms" type="checkbox"/>
                  <label className="text-sm text-on-surface-variant" htmlFor="terms">我同意国际协议和数据隐私协议。</label>
                </div>
                <button className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary rounded-xl font-headline font-bold uppercase tracking-[0.15em] text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/10" type="submit">完成注册</button>
              </form>
            </div>
            {/* Venue Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-surface-container-high p-10 rounded-xl border border-outline-variant/10">
                <div className="mb-8">
                  <Building2 className="text-primary mb-4" size={40} />
                  <h3 className="font-headline text-2xl font-bold mb-2">猎户座展馆</h3>
                  <p className="text-on-surface-variant leading-relaxed">瑞士日内瓦，罗纳大街 42 号，1204</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Wifi className="text-primary" size={20} />
                    <div>
                      <p className="font-bold text-sm">千兆连接</p>
                      <p className="text-xs text-on-surface-variant">全场覆盖安全网状网络。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Languages className="text-primary" size={20} />
                    <div>
                      <p className="font-bold text-sm">实时翻译</p>
                      <p className="text-xs text-on-surface-variant">支持48种行星语言。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Coffee className="text-primary" size={20} />
                    <div>
                      <p className="font-bold text-sm">餐饮服务</p>
                      <p className="text-xs text-on-surface-variant">米其林标准分子料理。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group h-64 rounded-xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlCNbLxztzcy5MyMaDooxZh2gmHdGKwzzCCo00CtHuL-xFYCjUWD3Htg7wwpxzZOd1XFdlMUz5gaLQ65BMcb-v6Mj1ylpO05mkLBC3DRSagM2FQ0RT9jbCqA22sVp-k3szAfhw-zJYd4fSi8j_2ZBSV7ODshkocxVB-srw7Y-tTjZUa_dxCn7p5QsrbVDjvaLOEnuLEcJ1YK1xVAjPtRxP1uUR3hxxA0aA7PCuIOmtOUJ9za4snWd9VpIVAKbPG4qbQOVVYs_n6Zc" 
                  alt="Geneva map"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-4 py-2 bg-background/80 backdrop-blur-lg rounded-lg text-xs font-label uppercase tracking-widest text-primary border border-primary/20 flex items-center gap-2">
                    查看地图 <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
