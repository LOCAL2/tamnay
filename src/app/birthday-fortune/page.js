'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const personalityTraits = {
  1: { trait: 'ผู้นำธรรมชาติ', description: 'มีความมุ่งมั่น เป็นคนที่ชอบการเป็นผู้นำ มีความคิดสร้างสรรค์' },
  2: { trait: 'นักการทูต', description: 'เป็นคนที่ชอบความสงบ มีความอดทน และเป็นคนที่ทำงานเป็นทีมได้ดี' },
  3: { trait: 'นักสื่อสาร', description: 'มีความสามารถในการสื่อสาร มีเสน่ห์ และเป็นคนที่มีความคิดสร้างสรรค์' },
  4: { trait: 'นักปฏิบัติ', description: 'เป็นคนที่มีระเบียบ มีความรับผิดชอบ และทำงานอย่างมีแบบแผน' },
  5: { trait: 'นักผจญภัย', description: 'ชอบความเสี่ยง รักอิสระ และมีความอยากรู้อยากเห็นสูง' },
  6: { trait: 'ผู้ดูแล', description: 'เป็นคนที่รักครอบครัว มีความรับผิดชอบ และชอบช่วยเหลือผู้อื่น' },
  7: { trait: 'นักคิด', description: 'เป็นคนที่ชอบการวิเคราะห์ มีสัญชาตญาณดี และชอบความลึกลับ' },
  8: { trait: 'นักธุรกิจ', description: 'มีความสามารถในการจัดการ มีความมุ่งมั่นในการประสบความสำเร็จ' },
  9: { trait: 'ผู้ให้', description: 'เป็นคนที่มีจิตใจกว้างขวาง ชอบช่วยเหลือผู้อื่น และมีความเมตตา' }
};

const luckyElements = {
  colors: ['แดง', 'ทอง', 'เขียว', 'น้ำเงิน', 'ม่วง', 'ชมพู', 'เงิน', 'ส้ม'],
  stones: ['ทับทิม', 'มรกต', 'ไพลิน', 'เพชร', 'อเมทิสต์', 'โทปาซ', 'เพิร์ล', 'โอปอล'],
  days: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์']
};

const dailyLuck = [
  'วันนี้เป็นวันที่ดีสำหรับการเริ่มต้นโครงการใหม่',
  'ความรักกำลังจะเข้ามาในชีวิตคุณ',
  'การเงินมีแนวโน้มที่ดี ควรพิจารณาการลงทุน',
  'สุขภาพแข็งแรง แต่ควรดูแลการพักผ่อน',
  'วันนี้เหมาะกับการพบปะเพื่อนฝูง',
  'โอกาสทางการงานกำลังจะมาถึง',
  'ควรระมัดระวังในการตัดสินใจสำคัญ',
  'ความคิดสร้างสรรค์กำลังไหลเวียนมาก'
];

export default function BirthdayFortune() {
  const [birthDate, setBirthDate] = useState('');
  const [fortune, setFortune] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const calculateLifePath = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // Calculate life path number
    let sum = day + month + year;
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    
    return sum;
  };

  const analyzeBirthday = () => {
    if (!birthDate) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const lifePathNumber = calculateLifePath(birthDate);
      const personality = personalityTraits[lifePathNumber];
      
      const randomLucky = {
        color: luckyElements.colors[Math.floor(Math.random() * luckyElements.colors.length)],
        stone: luckyElements.stones[Math.floor(Math.random() * luckyElements.stones.length)],
        day: luckyElements.days[Math.floor(Math.random() * luckyElements.days.length)]
      };
      
      const todayLuck = dailyLuck[Math.floor(Math.random() * dailyLuck.length)];
      
      setFortune({
        lifePathNumber,
        personality,
        lucky: randomLucky,
        todayLuck,
        birthDate: new Date(birthDate).toLocaleDateString('th-TH')
      });
      setIsAnalyzing(false);
    }, 2500);
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
          <div className="text-6xl mb-4">🎂</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            ทำนายจากวันเกิด
          </h1>
          <p className="text-white/80">วิเคราะห์นิสัยและโชคดีจากวันเกิดของคุณ</p>
        </motion.div>

        {/* Date Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-4">
              กรุณาใส่วันเกิดของคุณ
            </h2>
            <div className="max-w-md mx-auto">
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-purple-400 focus:outline-none"
              />
            </div>
            
            {birthDate && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={analyzeBirthday}
                disabled={isAnalyzing}
                className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>กำลังวิเคราะห์...</span>
                  </div>
                ) : (
                  'วิเคราะห์ดวงชะตา'
                )}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Fortune Result */}
        {fortune && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 mb-8"
          >
            {/* Life Path Number */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🔢</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  เลขประจำชีวิต: {fortune.lifePathNumber}
                </h3>
                <p className="text-purple-300 text-lg">{fortune.personality.trait}</p>
              </div>
              <p className="text-white/90 text-center">{fortune.personality.description}</p>
            </div>

            {/* Personality Analysis */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 text-center">
                🌟 สิ่งมงคลประจำตัว
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h5 className="font-semibold text-white mb-1">สีมงคล</h5>
                  <p className="text-white/90">{fortune.lucky.color}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💎</div>
                  <h5 className="font-semibold text-white mb-1">พลอยมงคล</h5>
                  <p className="text-white/90">{fortune.lucky.stone}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <h5 className="font-semibold text-white mb-1">วันมงคล</h5>
                  <p className="text-white/90">{fortune.lucky.day}</p>
                </div>
              </div>
            </div>

            {/* Today's Luck */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🍀</div>
                <h4 className="text-xl font-semibold text-white mb-3">โชคดีประจำวัน</h4>
                <p className="text-white/90">{fortune.todayLuck}</p>
              </div>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setBirthDate('');
                  setFortune(null);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                วิเคราะห์ใหม่
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
