'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    id: 'daily',
    title: 'ทำนายดวงรายวัน',
    description: 'ดูดวงประจำวันตามราศีและเวลา',
    icon: '🌅',
    href: '/daily-fortune',
    gradient: 'from-orange-400 to-pink-400'
  },
  {
    id: 'tarot',
    title: 'ดูไพ่ Tarot',
    description: 'เลือกไพ่ 3 ใบเพื่อดูดวง',
    icon: '🃏',
    href: '/tarot',
    gradient: 'from-purple-400 to-indigo-400'
  },
  {
    id: 'birthday',
    title: 'ทำนายจากวันเกิด',
    description: 'วิเคราะห์นิสัยและโชคดีจากวันเกิด',
    icon: '🎂',
    href: '/birthday-fortune',
    gradient: 'from-green-400 to-blue-400'
  },
  {
    id: 'zodiac',
    title: 'ราศีจักร',
    description: 'ดูดวงประจำสัปดาห์ตามราศี',
    icon: '♈',
    href: '/zodiac',
    gradient: 'from-red-400 to-yellow-400'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12"
        >
          <motion.div
            animate={{ rotate: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-6 inline-block"
          >
            🔮
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ทำนายดวง
          </h1>
          <p className="text-xl text-white/80 mb-8">
            เลือกประเภทการทำนายที่คุณต้องการ
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={category.href}>
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-6 h-48 cursor-pointer group`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white/90">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-white/60 py-8"
        >
        </motion.div>
      </div>
    </div>
  );
}
