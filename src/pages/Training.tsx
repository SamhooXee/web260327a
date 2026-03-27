/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  FileText,
  CheckCircle2,
  Users,
  Rocket,
  Download,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { applicationsApi } from "../lib/api/applications";

export const Training = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTrainingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setIsSubmitting(true);
      await applicationsApi.createTrainingApplication({
        full_name: formData.get("fullName") as string,
        organization: formData.get("organization") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        goals: formData.get("goals") as string,
      });
      alert("Application submitted successfully!");
      e.currentTarget.reset();
    } catch (error) {
      alert("Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };
  const benefits = [
    {
      icon: <CheckCircle2 className="text-primary" size={20} />,
      text: "获得认证的国际领导力证书"
    },
    {
      icon: <Users className="text-primary" size={20} />,
      text: "直接对接财富500强全球导师"
    },
    {
      icon: <Rocket className="text-primary" size={20} />,
      text: "专属战略部署框架"
    }
  ];

  const faqs = [
    {
      question: "申请资格要求是什么？",
      answer: "申请人必须具有至少8年的专业经验，其中3年担任中高级管理或外交职务。英语流利是必需的，因为它是主要的教学语言。"
    },
    {
      question: "是否提供财务援助？",
      answer: "是的，阿斯特拉全球为来自非营利组织和政府部门的专业人士提供有限数量的基于择优录取的奖学金。请在申请中咨询。"
    },
    {
      question: "混合授课模式是如何构成的？",
      answer: "第一周和最后一周在我们的日内瓦中心现场进行。中间三周由互动数字研讨会和本地化的项目工作组成。"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero & Overview */}
      <section className="max-w-7xl mx-auto px-8 pt-48 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="font-label text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">卓越专业精神</span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-tight mb-8 text-glow">
              全球领导力<br/>培训项目
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-xl">
              为国际外交官和企业愿景家量身定制的权威高管之旅。掌握全球战略艺术与国际协议。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-surface-container-high px-6 py-4 rounded-xl flex items-center gap-4">
                <Calendar className="text-primary" size={24} />
                <div>
                  <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">下一期课程</div>
                  <div className="font-headline font-bold text-on-surface">2024年10月12日 - 11月15日</div>
                </div>
              </div>
              <div className="bg-surface-container-high px-6 py-4 rounded-xl flex items-center gap-4">
                <MapPin className="text-primary" size={24} />
                <div>
                  <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">授课形式</div>
                  <div className="font-headline font-bold text-on-surface">混合高管模式</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
            <img 
              alt="Professional conference setting" 
              className="relative rounded-xl w-full h-[500px] object-cover shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgWk4EksMjZ1MCG8D0O_w_Y_j5Wa52SKPK4X5iANZ7MUZ8laJvIpridk-c6idf4ijuSGgwMj8Rp5deRTUmUKgNwBeOV-eDTT7cCA-Rf4CJDrF0xOaobaNaqzYzLA2pCcty0xG6T9kjalIHE9VckzdKvO_AyAM-VaKAEcIy0JlR3aB6EZqcNR_MYu4XGssHlPesxfwPLFdnxNjaDQtYMAM6wEvBVEpvYL6tv2r-HfmxqT0Ul4iSACbTDw1qflf8fRav_57EJTUoPhc"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Registration Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-surface-container/60 backdrop-blur-xl p-10 rounded-xl border border-outline-variant/20"
          >
            <h2 className="font-headline text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="text-primary" size={32} />
              Application Form
            </h2>
            <form onSubmit={handleTrainingSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-label text-sm text-primary uppercase tracking-widest font-semibold">全名</label>
                  <input name="fullName" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-on-surface transition-all" placeholder="张三" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm text-primary uppercase tracking-widest font-semibold">所属机构</label>
                  <input name="organization" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-on-surface transition-all" placeholder="阿斯特拉集团" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm text-primary uppercase tracking-widest font-semibold">电子邮箱</label>
                  <input name="email" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-on-surface transition-all" placeholder="j.doe@astraglobal.com" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="block font-label text-sm text-primary uppercase tracking-widest font-semibold">电话号码</label>
                  <input name="phone" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-on-surface transition-all" placeholder="+86 138-0000-0000" type="tel"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-label text-sm text-primary uppercase tracking-widest font-semibold">项目目标与备注</label>
                <textarea name="goals" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none text-on-surface transition-all" placeholder="简要描述您参加此项目的目标..." rows={4}></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-xl uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(233,193,118,0.2)]" type="submit">提交申请</button>
                <p className="text-on-surface-variant text-xs mt-4 text-center">提交即表示您同意我们的服务条款和有关高管数据处理的隐私政策。</p>
              </div>
            </form>
          </motion.div>

          {/* Sidebar Content */}
          <div className="space-y-8">
            {/* Benefits Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 rounded-xl"
            >
              <h3 className="font-headline font-bold text-xl mb-6 text-[#ffdea5]">项目优势</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-on-surface-variant">
                    {benefit.icon}
                    <span className="text-sm">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface-container p-8 rounded-xl"
            >
              <h3 className="font-headline font-bold text-xl mb-6">相关资源</h3>
              <div className="space-y-3">
                <a className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors group" href="#">
                  <span className="text-sm">课程简章</span>
                  <Download className="text-primary group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors group" href="#">
                  <span className="text-sm">校友案例研究</span>
                  <ExternalLink className="text-primary group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold mb-4">项目常见问题</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-on-surface">{faq.question}</span>
                <ChevronDown className="text-primary group-open:rotate-180 transition-transform" size={20} />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};
