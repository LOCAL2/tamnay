'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Link href="/">
            <h1 className="text-xl font-bold text-white cursor-pointer">
              🔮 ทำนายดวง
            </h1>
          </Link>
        </motion.div>

        <motion.div
          className="text-white/80 text-sm"
        >
          ⚠️ เพื่อความสนุกเท่านั้น ⚠️
        </motion.div>
      </div>
    </motion.nav>
  );
}
