"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DM_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Works() {
  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-10" style={{ fontFamily: 'var(--font-opensauce, "Open Sauce", sans-serif)', fontWeight: 700, color: '#111' }}>
              SELECTED <span className="italic font-normal" style={{ color: '#111' }}>WORKS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works1.jpg" alt="Work 1" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works2.jpg" alt="Work 2" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works3.jpg" alt="Work 3" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works4.jpg" alt="Work 4" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works5.jpg" alt="Work 5" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works6.jpg" alt="Work 6" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works7.jpg" alt="Work 7" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works8.png" alt="Work 8" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works9.png" alt="Work 9" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works10.png" alt="Work 10" fill className="object-cover" />
                </motion.div>
              </motion.div>
              <motion.div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" whileHover={{ rotateY: 180 }} style={{ perspective: 1000 }}>
                <motion.div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }} animate={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} transition={{ duration: 0.7 }}>
                  <Image src="/works/works11.png" alt="Work 11" fill className="object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
