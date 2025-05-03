"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gilda_Display, DM_Sans } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

const socialIcons = {
  facebook: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  instagram: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
    </svg>
  )
};

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/works" },
  { name: "About Us", href: "/about" },
  { name: "Let's Chat", href: "/contact", isButton: true }
];

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "Build visibility and connect with your audience on platforms that matter most."
  },
  {
    id: 2,
    title: "Video Production and Content Creation",
    description: "Build visibility and connect with your audience on platforms that matter most."
  },
  {
    id: 3,
    title: "SMS and Email Marketing",
    description: "Reach your audience where it matters—in their inbox or on their phone. Build loyalty and drive results with targeted email and SMS campaigns"
  },
  {
    id: 4,
    title: "Branding and Design",
    description: "From logos to complete brand identities, we design visuals that reflect your story and set your brand apart."
  },
  {
    id: 5,
    title: "Website, SEO, and Ads",
    description: "Optimize your online presence, improve search rankings, and launch campaigns that drive growth."
  }
];

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
          <Link href="/" className="relative w-[180px] h-[80px] -ml-4">
            <Image
              src="/logo.png"
              alt="We Nailed It Media"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="hidden md:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`font-['Norwester'] text-lg tracking-wider ${
                  item.isButton 
                    ? "px-6 py-2 bg-black text-white hover:bg-black/90" 
                    : "text-black/80 hover:text-black"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 p-8"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-8 mt-16">
              {navigationItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`font-['Norwester'] text-2xl ${
                    item.isButton ? "text-black" : "text-black/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 mt-8 border-t border-black/10">
                <div className="flex space-x-4">
                  {[
                    { name: 'facebook', url: 'https://facebook.com/wenaileditmedia' },
                    { name: 'instagram', url: 'https://instagram.com/wenaileditmedia' }
                  ].map(social => (
                    <Link 
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socialIcons[social.name as keyof typeof socialIcons]({
                        className: "w-5 h-5 text-black/70 group-hover:text-black/90 transition-colors"
                      })}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32">
        <section className="bg-white text-black py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h1 className="font-['Norwester'] text-5xl md:text-7xl mb-8">WHY CHOOSE US?</h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                At We Nailed It Media, our priority is collaboration, bold ideas, and delivering positive results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Social Media Growth",
                  desc: "Boosted social media engagement and traffic through tailored strategies"
                },
                {
                  title: "ROI-Driven Campaigns",
                  desc: "ROI-driven paid ads, email, and SMS campaigns that deliver results"
                },
                {
                  title: "Quality Content",
                  desc: "High-quality content creation to connect and inspire your audience"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 p-12 backdrop-blur-sm"
                >
                  <h3 className={`${gilda.className} text-2xl mb-4`}>{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <span className={`${gilda.className} text-7xl text-black/10 absolute -top-8 left-0`}>
                    {service.id}.
                  </span>
                  <div className="relative z-10">
                    <h3 className={`${gilda.className} text-2xl mb-4`}>{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-black text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${gilda.className} text-4xl mb-4`}
            >
              Your Brand Could Be Next
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${gilda.className} text-3xl mb-8`}
            >
              Let's Work Together
            </motion.h3>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black text-lg tracking-wider"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Image
                src="/logo.png"
                alt="We Nailed It Media"
                width={140}
                height={56}
                className="object-contain brightness-0 invert"
                priority
              />
              <p className="text-gray-400 text-sm">
                Creating impactful digital experiences through innovative solutions
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400">
                {services.map(service => (
                  <li key={service.id}>
                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                {["About", "Works", "Services", "Contact"].map(item => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} 
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'facebook', url: 'https://facebook.com/wenaileditmedia' },
                  { name: 'instagram', url: 'https://instagram.com/wenaileditmedia' }
                ].map(social => (
                  <Link 
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcons[social.name as keyof typeof socialIcons]({
                      className: "w-5 h-5 text-white/70 group-hover:text-white/90 transition-colors"
                    })}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} We Nailed It Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
