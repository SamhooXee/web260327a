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

export const Gallery = () => {
  const photos = [
    {
      id: 1,
      tag: "2023年全球峰会",
      title: "数字外交论坛",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUuJDxRtkTCh7a3uiwlvGMD6AkmEEkI6P7NgcQB7QdmoSfCi-LYrnZgUSfjjCtA4OJGRD_NqfYilfGAHZXHY-YqqW_YLa65H1x5qAjgVtM3F5Ra5BUKWhXk397oYciJEwT8vLmGdT7YmTgTIlNry7WC05ETWxDuKwSlpZsPLYAOOuCDSDBThWIE-fW4SCn05HREsGSWeS64sL_Ddea_5ndK1rOUDclmcho9N99_kzVepKem6VQoWhmCxZ7Y3JBNQlMzv8RGn9Gyxs"
    },
    {
      id: 2,
      tag: "Alpha 届毕业典礼",
      title: "精英领导力项目",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq5to1_2pr5vlaQ-GRfkx57sHwYcu5ONHos0xYOpLxVp1qp025TCVeqrgcxDEj4vj-KxU1NK0lc2lgnGva3FZYqRvA-mS9RTIjZQwrR9MgkGJW6dM_0rwV_vU21XCme4GFMRk5mwVYunpcAwzPDRtLwU45TjmauyzJLOhaRbtbkcD8lwb2nfDcbh54Wb5X9h7dJgN4Gx9-b33Ss_aevdl5tvFQ26jPwc5Ht86D3UfpJWVM9KoBCZNH9G71NucrYa0QM0lxpVESZWI"
    },
    {
      id: 3,
      tag: "2022年区域协作",
      title: "泛亚经济圆桌会议",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfCtoY7qsN0GnpVT-CHy5_LtDAhkBBv_3D98abFM6cG8WcJLizQS1bOsvQstCdIOFphQmD_PLH3PJfHUMXaa54k1wuDCHqb8hUP8jfhEIwly9sJhCoQrz4KdyFMCT-BKr_FNhoE1LVE17usNbOJAFIuPByRAmRlF9o01ECuW1qq4cQF6SgRJdHjN2e7ip0rnJ9TJokzT4J1lRsCtzUIuz08x9bIf00B0z_E_piucrqZgC5QfVO551CtkqbH0k8ugkvMuzwAS9KASw"
    },
    {
      id: 4,
      tag: "2023年年度盛典",
      title: "星际卓越奖颁奖礼",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlzwQTCg1XydE_VaAiWLGIovMQf8LpQpfvWaOcnhBHdrObGpu46ZgsvoV-GzeV32zGO1hG7Z1pWo9nczKWnyp1dVamjaQaIDS6K5pl8D1C6IAQI3ms_sVF5opw7s-FcEoxvpdsPuC32U-etb9As9xLByBtD9AKg7epQGfeKtC0PqSlvDGW6wTpAU917oT39fJN4FfrRrcx6VeON_iLTcFLW5K8755h60nIdAfqAnxVuDXPe4jFjsJTKm8OTBcFT-U4-3B6I4pJ2so"
    },
    {
      id: 5,
      tag: "2021年卓越培训",
      title: "战略协议研修班",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiCi056sWymnJzEc9yRXd5mKhJZFbQGqlAPHXKb2A9zoLjmuIPPck6doDvb9WKJirXNlJPDyyHl0nhCN3syyWo9upY13k0WA2Y7zIVYRQ-KBlNK1W4x1mGaA6su1CO1m4C7EAWxcvxrCuHde6BKRJv4KOvYQ_hmtSxRVx-hChgjqyu6StZA-xOAnqEL-Z2KSVhgfs4Pff3lB74rnDWgsYCbDLsTj3dvS06ZlFuD60YOm09V9jLwsrg3AeKA9Wmb5xLgP5QlLhY7UQ"
    },
    {
      id: 6,
      tag: "Beta 届研讨会",
      title: "未来遗产实验室",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEFAC9PHaG4h6GbU27iSSS-ax1kKxi74IUENHeRqD2NQY5aNevPUqyvV1uGbjXndvGyNP0cMoIhaMA-VR1IZTOD0racr0oMnL010IjyLry7gRIpHvI7ObKOKhP7qxHY207EhiM1y8gx_PXMagkuCpML3NfGfKNmsaTSftXhJD2f5LF9R05FRNh7QJLNWWsHEXVevT4jMRDE0hnVMNwTU5ru806YsPci6yANk5MKYvUncvtMUCkRd0JJUhOqZkzvtwxxQngQS6gObQ"
    }
  ];

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
              src={photo.image}
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
