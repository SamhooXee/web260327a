/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  School,
  MessageSquare,
  ArrowRight,
  Calendar
} from "lucide-react";
import { eventsApi } from "../lib/api/events";
import { useI18n } from "../i18n";
import type { Event } from "../lib/types";

export const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const { t } = useI18n();

  useEffect(() => {
    eventsApi.getAll().then(setEvents).catch(console.error);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl px-8 text-center"
        >
          <span className="inline-block label-md text-primary mb-6 animate-pulse">{t.home.hero.badge}</span>
          <h1 className="display-lg text-on-surface leading-none mb-8 text-glow">
            {t.home.hero.title1} <br /> <span className="text-primary italic">{t.home.hero.title2}</span>
          </h1>
          <p className="body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            {t.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-on-primary font-headline font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              {t.home.hero.cta1}
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-surface-container-highest/40 backdrop-blur-md text-on-surface font-headline font-bold rounded-xl border border-outline-variant/20 hover:bg-surface-container-highest/60 transition-all">
              {t.home.hero.cta2}
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">{t.home.hero.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-32 relative bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
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
            className="order-1 lg:order-2"
          >
            <span className="label-md text-primary block mb-4">{t.home.mission.label}</span>
            <h2 className="headline-lg text-on-surface mb-8 leading-tight">{t.home.mission.title}</h2>
            <div className="space-y-6 text-on-surface-variant body-lg">
              <p>{t.home.mission.desc1}</p>
              <p>{t.home.mission.desc2}</p>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-outline-variant/20 pt-12">
              <div>
                <div className="text-3xl font-headline font-extrabold text-primary">50+</div>
                <div className="label-sm text-on-surface-variant mt-1">{t.home.mission.countries}</div>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div>
                <div className="text-3xl font-headline font-extrabold text-primary">12k+</div>
                <div className="label-sm text-on-surface-variant mt-1">{t.home.mission.alumni}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-surface-container-high rounded-xl overflow-hidden p-10 flex flex-col justify-end min-h-[500px] transition-all"
            >
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3aBd-5yWzrP_ce93k1VtD_NLLDt4COawQ9keBAhXpvxtN8JsGjGM2iqLxfpTlPS1W4uQj3ApAPgWET_YggSpZvMdiui2JVL6DHylEBuEfHQM_wT33nnPknQmSTVF_Q_2zPYLXDPs9Q8LYeTfbdBMU3D6fiMvJ_dzSdQErsLIO9jB4E4POnlz2cqhgryW9On2Vgz741lscquD6YC-tmzXsddg-Ag4tG3e-QV1Jdn4FX8aELugQR1Te7H02uxrH4ONfQHHrRaKwz0c"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/60 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                  <School className="text-primary" size={24} />
                </div>
                <h3 className="headline-lg text-on-surface mb-4">{t.home.bento.training.title}</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">{t.home.bento.training.desc}</p>
                <button className="flex items-center gap-2 text-primary font-headline font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  {t.home.bento.training.cta} <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-surface-container-high rounded-xl overflow-hidden p-10 flex flex-col justify-end min-h-[500px] transition-all"
            >
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJt4Ch2qCQcrwfiDhcOi3BP_OvEl2NSVBWmc_6pVhXHOSIEOrKkAAL6ieFfLqymErRy_x1eW96vD0vorV1o4F8JN3h9IZ-o83WmP9AqDfxuwnBVB815RM_qJ2K1kIi-vVp9P-JTT-8uXIxwY29zVwZyfMmPzwy-1bnAiDA1Qpn0jwjBXq3n7X8AEogTe39wDgLQNDDA5NmZYzAfw9-2sRZtQE31XscMIg9alGQRt7mT2AFJmeWx3YWUeyXfisuOvl0auDrwxdtvFY"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/60 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                  <MessageSquare className="text-secondary" size={24} />
                </div>
                <h3 className="headline-lg text-on-surface mb-4">{t.home.bento.conference.title}</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">{t.home.bento.conference.desc}</p>
                <button className="flex items-center gap-2 text-secondary font-headline font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  {t.home.bento.conference.cta} <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="label-md text-primary block mb-4">{t.home.events.label}</span>
              <h2 className="headline-lg text-on-surface">{t.home.events.title}</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline font-semibold">
              {t.home.events.viewAll} <Calendar size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                    src={event.image_url}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-primary uppercase tracking-tighter">
                    {event.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs font-bold font-headline">{event.date}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span className="text-on-surface-variant text-xs uppercase tracking-tight">{event.location}</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
