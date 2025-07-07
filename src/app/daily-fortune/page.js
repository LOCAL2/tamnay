'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const zodiacSigns = [
  { name: 'มีน', icon: '♓', dates: 'มี.ค. 21 - เม.ย. 19' },
  { name: 'เมษ', icon: '♈', dates: 'เม.ย. 20 - พ.ค. 20' },
  { name: 'พฤษภ', icon: '♉', dates: 'พ.ค. 21 - มิ.ย. 21' },
  { name: 'เมถุน', icon: '♊', dates: 'มิ.ย. 22 - ก.ค. 22' },
  { name: 'กรกฎ', icon: '♋', dates: 'ก.ค. 23 - ส.ค. 22' },
  { name: 'สิงห์', icon: '♌', dates: 'ส.ค. 23 - ก.ย. 22' },
  { name: 'กันย์', icon: '♍', dates: 'ก.ย. 23 - ต.ค. 23' },
  { name: 'ตุลย์', icon: '♎', dates: 'ต.ค. 24 - พ.ย. 22' },
  { name: 'พิจิก', icon: '♏', dates: 'พ.ย. 23 - ธ.ค. 21' },
  { name: 'ธนู', icon: '♐', dates: 'ธ.ค. 22 - ม.ค. 19' },
  { name: 'มกร', icon: '♑', dates: 'ม.ค. 20 - ก.พ. 18' },
  { name: 'กุมภ์', icon: '♒', dates: 'ก.พ. 19 - มี.ค. 20' }
];

const fortuneMessages = [
  'วันนี้เป็นวันที่ดีสำหรับการเริ่มต้นสิ่งใหม่ ๆ',
  'ความรักกำลังจะเข้ามาในชีวิตคุณ',
  'การเงินมีแนวโน้มที่ดี ควรลงทุนอย่างรอบคอบ',
  'สุขภาพแข็งแรง แต่ควรระวังการบาดเจ็บเล็กน้อย',
  'วันนี้เหมาะกับการพบปะเพื่อนฝูง',
  'โอกาสทางการงานกำลังจะมาถึง',
  'ควรระมัดระวังในการตัดสินใจสำคัญ',
  'ดวงชะตาส่องแสง ความสำเร็จรออยู่ข้างหน้า',
  'วันนี้เหมาะกับการทำสมาธิและพักผ่อน',
  'ความคิดสร้างสรรค์กำลังไหลเวียนมาก'
];

const luckyItems = [
  { type: 'สี', items: ['แดง', 'ทอง', 'เขียว', 'น้ำเงิน', 'ม่วง', 'ชมพู'] },
  { type: 'เลข', items: ['7', '3', '9', '1', '5', '8'] },
  { type: 'ทิศ', items: ['ทิศเหนือ', 'ทิศใต้', 'ทิศตะวันออก', 'ทิศตะวันตก'] }
];

export default function DailyFortune() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [fortune, setFortune] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateFortune = () => {
    if (!selectedZodiac) return;
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
      const randomLucky = {
        color: luckyItems[0].items[Math.floor(Math.random() * luckyItems[0].items.length)],
        number: luckyItems[1].items[Math.floor(Math.random() * luckyItems[1].items.length)],
        direction: luckyItems[2].items[Math.floor(Math.random() * luckyItems[2].items.length)]
      };
      
      setFortune({
        message: randomFortune,
        lucky: randomLucky,
        date: new Date().toLocaleDateString('th-TH')
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="text-6xl mb-4">🌅</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            ทำนายดวงรายวัน
          </h1>
          <p className="text-white/80">เลือกราศีของคุณเพื่อดูดวงประจำวัน</p>
        </motion.div>

        {/* Zodiac Selection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            เลือกราศีของคุณ
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {zodiacSigns.map((zodiac, index) => (
              <motion.button
                key={zodiac.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedZodiac(zodiac)}
                className={`p-4 rounded-xl text-center transition-all ${
                  selectedZodiac?.name === zodiac.name
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="text-2xl mb-1">{zodiac.icon}</div>
                <div className="text-sm font-medium">{zodiac.name}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Generate Button */}
        {selectedZodiac && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateFortune}
              disabled={isGenerating}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg disabled:opacity-50"
            >
              {isGenerating ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>กำลังทำนาย...</span>
                </div>
              ) : (
                'ทำนายดวงวันนี้'
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Fortune Result */}
        {fortune && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8"
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">{selectedZodiac.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-1">
                ราศี{selectedZodiac.name}
              </h3>
              <p className="text-white/80">{fortune.date}</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">🔮 ดวงประจำวัน</h4>
              <p className="text-white/90">{fortune.message}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h5 className="font-semibold text-white mb-1">สีมงคล</h5>
                <p className="text-white/90">{fortune.lucky.color}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🔢</div>
                <h5 className="font-semibold text-white mb-1">เลขมงคล</h5>
                <p className="text-white/90">{fortune.lucky.number}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🧭</div>
                <h5 className="font-semibold text-white mb-1">ทิศมงคล</h5>
                <p className="text-white/90">{fortune.lucky.direction}</p>
              </div>
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
