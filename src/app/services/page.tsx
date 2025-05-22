"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const services = [
  {
    title: "SOCIAL MEDIA MARKETING",
    description: "Build visibility and connect with your audience on platforms that matter most.",
    href: "/services/social-media",
    icon: "01"
  },
  {
    title: "VIDEO PRODUCTION",
    subtitle: "AND CONTENT CREATION",
    description: "Build visibility and connect with your audience on platforms that matter most.",
    href: "/services/video-production",
    
  },
  {
    title: "SMS AND EMAIL MARKETING",
    description: "Reach your audience where it matters—in their inbox or on their phone. Build loyalty and drive results with targeted email and SMS campaigns",
    href: "/services/email-marketing",
    icon: "03"
  },
  {
    title: "BRANDING AND DESIGN",
    description: "From logos to complete brand identities, we design visuals that reflect your story and set your brand apart.",
    href: "/services/branding",
    icon: "04"
  },
  {
    title: "WEBSITE, SEO, AND ADS",
    description: "Optimize your online presence, improve search rankings, and launch campaigns that drive growth.",
    href: "/services/web-seo",
    icon: "05"
  }
];

export default function Services() {
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
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white/60 font-['Norwester'] text-lg mb-4 block"
                >
                  OUR SERVICES
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8"
                >
                  WE NAILED IT!<br />DIGITAL AGENCY
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 max-w-lg font-['Gilroy']"
              >
                Your goals are our mission. Let's bring your vision to life with strategies that work and deliver results that matter.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center items-start gap-10">
                <h2 className="text-4xl font-extrabold mb-4 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', display: 'inline-block', letterSpacing: '-0.5px' }}>
                  LET'S NAIL YOUR DIGITAL PRESENCE
                </h2>
                <Link href="#" className="inline-block bg-black text-white border-2 border-black rounded-full px-10 py-3 text-lg font-bold hover:bg-white hover:text-black transition-all shadow-md tracking-wide relative overflow-hidden group link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', letterSpacing: '0.05em' }}>
                  <span className="relative z-10">learnmore</span>
                </Link>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', letterSpacing: '-0.5px' }}>
                    SOCIAL MEDIA MARKETING
                  </h3>
                  <p className="text-black/80 text-base leading-relaxed" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
                    You want to show up online—and stand out like you mean it. We’ll help you build a brand that’s bold, that doesn’t whisper, that gets people to stop scrolling, pay attention, and engage. From content to paid ads—we’re here to make your brand unforgettable.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', letterSpacing: '-0.5px' }}>
                    VIDEO PRODUCTION <span className="block text-black/60 text-base font-normal">AND CONTENT CREATION</span>
                  </h3>
                  <p className="text-black/80 text-base leading-relaxed" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
                    People need stories, not ads. We help you tell it loud and clear—with polished brand videos, short-form content, and creative photo shoots. We bring the right ideas and the right crowd to every shoot.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', letterSpacing: '-0.5px' }}>
                    BRANDING & DESIGN
                  </h3>
                  <p className="text-black/80 text-base leading-relaxed" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
                    Your brand should feel like you—and it should make people look twice. We’ll help you get an identity that’s not just nice to look at, but that’ll turn into your logo or your social profile to show you show up online, we’ll make sure it all clicks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', letterSpacing: '-0.5px' }}>
                    SMS & EMAIL MARKETING
                  </h3>
                  <p className="text-black/80 text-base leading-relaxed" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
                    We get your message where it matters—straight to the inbox or right to their phone. With smart targeting and creative campaigns, we help you stay personal, clear, and on brand.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', letterSpacing: '-0.5px' }}>
                    MANAGEMENT
                  </h3>
                  <p className="text-black/80 text-base leading-relaxed" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
                    Fast and don’t have time to gamble. We run smart campaigns that knock out problems, keep things on track, and scale what’s working. Real reports, real results—no guessing, just strategy, teamwork, and performance you can track.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold mb-2 link-underline" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)', color: '#111', letterSpacing: '-0.5px' }}>
                    WEB DEVELOPMENT & DESIGN
                  </h3>
                  <p className="text-black/80 text-base leading-relaxed" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
                    Your website should do more than exist. We build sites that load clean, speak your brand, and get results. SEO and paid ads? We help you make sure you’re strongest asset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
