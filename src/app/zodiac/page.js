'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const zodiacSigns = [
  { 
    name: 'มีน', 
    icon: '♓', 
    dates: 'มี.ค. 21 - เม.ย. 19',
    element: 'ไฟ',
    color: 'แดง'
  },
  { 
    name: 'เมษ', 
    icon: '♈', 
    dates: 'เม.ย. 20 - พ.ค. 20',
    element: 'ไฟ',
    color: 'แดง'
  },
  { 
    name: 'พฤษภ', 
    icon: '♉', 
    dates: 'พ.ค. 21 - มิ.ย. 21',
    element: 'ดิน',
    color: 'เขียว'
  },
  { 
    name: 'เมถุน', 
    icon: '♊', 
    dates: 'มิ.ย. 22 - ก.ค. 22',
    element: 'ลม',
    color: 'เหลือง'
  },
  { 
    name: 'กรกฎ', 
    icon: '♋', 
    dates: 'ก.ค. 23 - ส.ค. 22',
    element: 'น้ำ',
    color: 'เงิน'
  },
  { 
    name: 'สิงห์', 
    icon: '♌', 
    dates: 'ส.ค. 23 - ก.ย. 22',
    element: 'ไฟ',
    color: 'ทอง'
  },
  { 
    name: 'กันย์', 
    icon: '♍', 
    dates: 'ก.ย. 23 - ต.ค. 23',
    element: 'ดิน',
    color: 'น้ำตาล'
  },
  { 
    name: 'ตุลย์', 
    icon: '♎', 
    dates: 'ต.ค. 24 - พ.ย. 22',
    element: 'ลม',
    color: 'ชมพู'
  },
  { 
    name: 'พิจิก', 
    icon: '♏', 
    dates: 'พ.ย. 23 - ธ.ค. 21',
    element: 'น้ำ',
    color: 'แดงเข้ม'
  },
  { 
    name: 'ธนู', 
    icon: '♐', 
    dates: 'ธ.ค. 22 - ม.ค. 19',
    element: 'ไฟ',
    color: 'ม่วง'
  },
  { 
    name: 'มกร', 
    icon: '♑', 
    dates: 'ม.ค. 20 - ก.พ. 18',
    element: 'ดิน',
    color: 'ดำ'
  },
  { 
    name: 'กุมภ์', 
    icon: '♒', 
    dates: 'ก.พ. 19 - มี.ค. 20',
    element: 'ลม',
    color: 'น้ำเงิน'
  }
];

const weeklyFortunes = {
  love: [
    'ความรักกำลังจะบานสะพรั่ง คนโสดมีโอกาสพบรักแท้',
    'ความสัมพันธ์อาจมีปัญหาเล็กน้อย ควรสื่อสารกันมากขึ้น',
    'สัปดาห์นี้เหมาะกับการแสดงความรู้สึกที่แท้จริง',
    'ความรักเก่าอาจกลับมาอีกครั้ง ให้โอกาสกันใหม่',
    'คนมีคู่ควรใช้เวลาร่วมกันมากขึ้น'
  ],
  work: [
    'โอกาสทางการงานใหม่กำลังจะมาถึง',
    'ควรระมัดระวังในการตัดสินใจเรื่องงาน',
    'ความคิดสร้างสรรค์จะช่วยให้งานประสบความสำเร็จ',
    'การทำงานเป็นทีมจะให้ผลลัพธ์ที่ดี',
    'เวลาที่เหมาะสมสำหรับการเปลี่ยนงาน'
  ],
  money: [
    'การเงินมีแนวโน้มที่ดี ควรพิจารณาการลงทุน',
    'ควรประหยัดและวางแผนการเงินให้ดี',
    'รายได้เสริมอาจเข้ามาจากทางที่ไม่คาดคิด',
    'ระวังการใช้จ่ายฟุ่มเฟือย',
    'เวลาที่ดีสำหรับการออมเงิน'
  ],
  health: [
    'สุขภาพแข็งแรง แต่ควรดูแลการพักผ่อน',
    'ควรออกกำลังกายและดูแลสุขภาพจิต',
    'ระวังการบาดเจ็บจากการทำงาน',
    'การทานอาหารที่มีประโยชน์จะช่วยเพิ่มพลังงาน',
    'เวลาที่เหมาะสมสำหรับการตรวจสุขภาพ'
  ]
};

export default function ZodiacFortune() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [weeklyFortune, setWeeklyFortune] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateWeeklyFortune = (zodiac) => {
    setSelectedZodiac(zodiac);
    setIsGenerating(true);
    
    setTimeout(() => {
      const fortune = {
        love: weeklyFortunes.love[Math.floor(Math.random() * weeklyFortunes.love.length)],
        work: weeklyFortunes.work[Math.floor(Math.random() * weeklyFortunes.work.length)],
        money: weeklyFortunes.money[Math.floor(Math.random() * weeklyFortunes.money.length)],
        health: weeklyFortunes.health[Math.floor(Math.random() * weeklyFortunes.health.length)]
      };
      
      setWeeklyFortune(fortune);
      setIsGenerating(false);
    }, 2000);
  };

  const getWeekRange = () => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    
    return `${startOfWeek.toLocaleDateString('th-TH')} - ${endOfWeek.toLocaleDateString('th-TH')}`;
  };

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="text-6xl mb-4">♈</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            ราศีจักร
          </h1>
          <p className="text-white/80">ดูดวงประจำสัปดาห์ตามราศีของคุณ</p>
          <p className="text-white/60 mt-2">สัปดาห์นี้: {getWeekRange()}</p>
        </motion.div>

        {!weeklyFortune && (
          <>
            {/* Zodiac Selection */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-white mb-6 text-center">
                เลือกราศีของคุณ
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {zodiacSigns.map((zodiac, index) => (
                  <motion.button
                    key={zodiac.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => generateWeeklyFortune(zodiac)}
                    disabled={isGenerating}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all disabled:opacity-50"
                  >
                    <div className="text-4xl mb-2">{zodiac.icon}</div>
                    <div className="text-white font-semibold mb-1">ราศี{zodiac.name}</div>
                    <div className="text-white/70 text-xs mb-2">{zodiac.dates}</div>
                    <div className="text-white/60 text-xs">
                      ธาตุ: {zodiac.element} | สี: {zodiac.color}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Loading */}
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-8xl mb-4"
                >
                  {selectedZodiac?.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  กำลังดูดวงราศี{selectedZodiac?.name}...
                </h3>
                <p className="text-white/80">โปรดรอสักครู่</p>
              </motion.div>
            )}
          </>
        )}

        {/* Weekly Fortune Result */}
        {weeklyFortune && selectedZodiac && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            {/* Zodiac Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-3">{selectedZodiac.icon}</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                ราศี{selectedZodiac.name}
              </h2>
              <p className="text-white/80">{selectedZodiac.dates}</p>
              <p className="text-white/60">ธาตุ: {selectedZodiac.element} | สีมงคล: {selectedZodiac.color}</p>
            </div>

            {/* Fortune Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💕</div>
                  <h3 className="text-xl font-semibold text-white">ความรัก</h3>
                </div>
                <p className="text-white/90">{weeklyFortune.love}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💼</div>
                  <h3 className="text-xl font-semibold text-white">การงาน</h3>
                </div>
                <p className="text-white/90">{weeklyFortune.work}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💰</div>
                  <h3 className="text-xl font-semibold text-white">การเงิน</h3>
                </div>
                <p className="text-white/90">{weeklyFortune.money}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏥</div>
                  <h3 className="text-xl font-semibold text-white">สุขภาพ</h3>
                </div>
                <p className="text-white/90">{weeklyFortune.health}</p>
              </motion.div>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedZodiac(null);
                  setWeeklyFortune(null);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                เลือกราศีใหม่
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ← กลับหน้าหลัก
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
