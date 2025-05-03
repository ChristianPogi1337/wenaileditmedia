"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const sections = [
  {
    title: "INFORMATION WE COLLECT",
    content: "We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when using our services."
  },
  {
    title: "HOW WE USE YOUR INFORMATION",
    content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations."
  },
  {
    title: "INFORMATION SHARING",
    content: "We do not share your personal information with third parties except as described in this privacy policy or with your explicit consent."
  },
  {
    title: "DATA SECURITY",
    content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
  }
];

export default function Privacy() {
  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <Header />  

      <main className="pt-24">
        <section className="relative py-20 md:py-32 overflow-hidden bg-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white/5 z-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] z-20" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-white/60 font-['Anton'] text-lg mb-4 block">
                LEGAL
              </span>
              <h1 className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/60 font-['Gilroy']">
                Your privacy is important to us. Read how we protect and manage your data.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-16">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black/5 p-8 rounded-lg"
                >
                  <h2 className="font-['Anton'] text-2xl mb-4">
                    {section.title}
                  </h2>
                  <p className="text-black/60 font-['Gilroy'] text-lg leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 border border-black/10 rounded-lg"
            >
              <p className="text-black/60 font-['Gilroy'] text-lg text-center">
                For any privacy-related questions, please contact us at{" "}
                <a href="mailto:privacy@wenaileditmedia.com" className="text-black hover:underline">
                  privacy@wenaileditmedia.com
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
