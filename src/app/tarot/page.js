'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const tarotCards = [
  { id: 1, name: 'The Fool', meaning: 'การเริ่มต้นใหม่ ความบริสุทธิ์ใจ การผจญภัย', emoji: '🃏' },
  { id: 2, name: 'The Magician', meaning: 'พลังแห่งการสร้างสรรค์ ความมั่นใจ การควบคุม', emoji: '🎩' },
  { id: 3, name: 'The High Priestess', meaning: 'สัญชาตญาณ ความลึกลับ ภูมิปัญญาภายใน', emoji: '🌙' },
  { id: 4, name: 'The Empress', meaning: 'ความอุดมสมบูรณ์ ความเป็นแม่ ธรรมชาติ', emoji: '👑' },
  { id: 5, name: 'The Emperor', meaning: 'อำนาจ ความเป็นผู้นำ โครงสร้าง', emoji: '⚡' },
  { id: 6, name: 'The Hierophant', meaning: 'ประเพณี การศึกษา ความเชื่อ', emoji: '📿' },
  { id: 7, name: 'The Lovers', meaning: 'ความรัก ความสัมพันธ์ การเลือก', emoji: '💕' },
  { id: 8, name: 'The Chariot', meaning: 'ความมุ่งมั่น การควบคุม ชิงชัย', emoji: '🏆' },
  { id: 9, name: 'Strength', meaning: 'ความแข็งแกร่ง ความอดทน การควบคุมตนเอง', emoji: '💪' },
  { id: 10, name: 'The Hermit', meaning: 'การค้นหาตัวเอง ภูมิปัญญา การสะท้อนใจ', emoji: '🕯️' },
  { id: 11, name: 'Wheel of Fortune', meaning: 'โชคชะตา การเปลี่ยนแปลง วงจรชีวิต', emoji: '🎡' },
  { id: 12, name: 'Justice', meaning: 'ความยุติธรรม สมดุล การตัดสินใจ', emoji: '⚖️' },
  { id: 13, name: 'The Hanged Man', meaning: 'การเสียสละ มุมมองใหม่ การรอคอย', emoji: '🙃' },
  { id: 14, name: 'Death', meaning: 'การเปลี่ยนแปลง การสิ้นสุด การเริ่มต้นใหม่', emoji: '🦋' },
  { id: 15, name: 'Temperance', meaning: 'ความสมดุล ความอดทน การผสมผสาน', emoji: '🌈' },
  { id: 16, name: 'The Devil', meaning: 'การติดข้องใจ ความปรารถนา การหลงผิด', emoji: '😈' },
  { id: 17, name: 'The Tower', meaning: 'การเปลี่ยนแปลงกะทันหัน การทำลาย การตื่นรู้', emoji: '⚡' },
  { id: 18, name: 'The Star', meaning: 'ความหวัง การรักษา แรงบันดาลใจ', emoji: '⭐' },
  { id: 19, name: 'The Moon', meaning: 'ความลึกลับ ความกลัว จิตใต้สำนึก', emoji: '🌙' },
  { id: 20, name: 'The Sun', meaning: 'ความสุข ความสำเร็จ พลังงานบวก', emoji: '☀️' },
  { id: 21, name: 'Judgement', meaning: 'การตัดสิน การเกิดใหม่ การให้อภัย', emoji: '📯' },
  { id: 22, name: 'The World', meaning: 'ความสำเร็จ ความสมบูรณ์ การบรรลุเป้าหมาย', emoji: '🌍' }
];

const positions = [
  { name: 'อดีต', description: 'สิ่งที่ผ่านมาและมีผลต่อปัจจุบัน' },
  { name: 'ปัจจุบัน', description: 'สถานการณ์ในขณะนี้' },
  { name: 'อนาคต', description: 'สิ่งที่จะเกิดขึ้นหรือแนวโน้ม' }
];

export default function TarotReading() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  const shuffleCards = () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setSelectedCards([]);
    setShowResult(false);
  };

  const selectCard = (card) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const startReading = () => {
    if (selectedCards.length === 3) {
      setIsReading(true);
      setTimeout(() => {
        setIsReading(false);
        setShowResult(true);
      }, 3000);
    }
  };

  const resetReading = () => {
    setSelectedCards([]);
    setShowResult(false);
    setShuffledCards([]);
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
          <div className="text-6xl mb-4">🃏</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            ดูไพ่ Tarot
          </h1>
          <p className="text-white/80">เลือกไพ่ 3 ใบเพื่อดูดวงอดีต ปัจจุบัน อนาคต</p>
        </motion.div>

        {!showResult && (
          <>
            {/* Shuffle Button */}
            {shuffledCards.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shuffleCards}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
                >
                  🔀 สับไพ่
                </motion.button>
              </motion.div>
            )}

            {/* Card Selection */}
            {shuffledCards.length > 0 && !isReading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold text-white mb-4 text-center">
                  เลือกไพ่ 3 ใบ ({selectedCards.length}/3)
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-6">
                  {shuffledCards.slice(0, 16).map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, rotateY: 180 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => selectCard(card)}
                      className={`aspect-[2/3] rounded-lg cursor-pointer transition-all ${
                        selectedCards.find(c => c.id === card.id)
                          ? 'bg-purple-500 shadow-lg'
                          : 'bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
                      }`}
                    >
                      <div className="h-full flex items-center justify-center">
                        {selectedCards.find(c => c.id === card.id) ? (
                          <div className="text-center text-white">
                            <div className="text-2xl mb-1">{card.emoji}</div>
                            <div className="text-xs px-1">{card.name}</div>
                          </div>
                        ) : (
                          <div className="text-4xl">🃏</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {selectedCards.length === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startReading}
                      className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
                    >
                      ✨ เริ่มการทำนาย
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Reading Animation */}
            {isReading && (
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
                  🔮
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  กำลังอ่านไพ่...
                </h3>
                <p className="text-white/80">โปรดรอสักครู่</p>
              </motion.div>
            )}
          </>
        )}

        {/* Reading Result */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              ผลการทำนาย
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {selectedCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{card.emoji}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {positions[index].name}
                  </h3>
                  <h4 className="text-purple-300 mb-3">{card.name}</h4>
                  <p className="text-white/80 text-sm mb-3">
                    {positions[index].description}
                  </p>
                  <p className="text-white/90">{card.meaning}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetReading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                ทำนายใหม่
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
