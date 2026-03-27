/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ChevronDown,
  Bell,
  User as UserIcon
} from "lucide-react";
import { useState, useEffect } from 'react';
import { galleryApi } from '../lib/api/gallery';
import type { Gallery } from '../lib/types';

export const Gallery = () => {
  const [photos, setPhotos] = useState<Gallery[]>([]);

  useEffect(() => {
    galleryApi.getAll().then(setPhotos).catch(console.error);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto min-h-screen">
      {/* Hero Section */}
      <header className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label text-primary text-sm tracking-widest uppercase mb-4 block"
        >
          Capturing Excellence
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white"
        >
          历史照片墙
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg max-w-2xl text-on-surface-variant"
        >
          捕捉全球卓越时刻。从具有里程碑意义的国际会议到塑造未来的精英培训，每一张照片都见证了 Astra Global 的非凡旅程。
        </motion.p>
      </header>

      {/* Filters */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex p-1 bg-surface-container-low border border-outline-variant/10 rounded-full">
          <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-bold text-sm transition-all shadow-lg">
            会议活动
          </button>
          <button className="px-8 py-3 rounded-full text-on-surface-variant font-semibold text-sm hover:text-white transition-all">
            培训项目
          </button>
        </div>
      </div>

      {/* Photo Wall Masonry Grid */}
      <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
        {photos.map((photo, idx) => (
          <motion.div 
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:-translate-y-2 bg-surface-container-high"
          >
            <img 
              alt={photo.title} 
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
              src={photo.image_url}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold tracking-widest uppercase rounded-full mb-2">
                {photo.tag}
              </span>
              <h3 className="text-white font-headline font-bold text-xl">{photo.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-20 flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-10 py-4 border border-outline-variant/10 text-white hover:border-primary hover:text-primary transition-all rounded-full group"
        >
          <span className="font-semibold">加载更多瞬间</span>
          <ChevronDown className="group-hover:rotate-180 transition-transform" size={20} />
        </motion.button>
      </div>
    </main>
  );
};
