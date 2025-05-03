"use client";

import { JSX, SVGProps, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DM_Sans } from 'next/font/google';
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ['latin'] });

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/works" },
  { name: "About Us", href: "/about" },
  { name: "Let's Chat", href: "/contact", isButton: true }
];

const socialIcons = {
  facebook: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
    </svg>
  ),
  instagram: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.901 4.901 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.901 4.901 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.883.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.975-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.883.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.975-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.883-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.975.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.883-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.063A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zM12 15a3 3 0 110-6 3 3 0 010 6zm5.338-7.862a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"/>
    </svg>
  )
};

const privacyContent = [
  {
    title: "Information Collection",
    content: "We collect information that you provide directly to us, including when you fill out a contact form, sign up for our newsletter, or interact with our services."
  },
  {
    title: "Use of Information",
    content: "We use the information we collect to provide and improve our services, communicate with you, and send you marketing communications (with your consent)."
  },
  {
    title: "Information Sharing",
    content: "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in our operations."
  }
];

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
          <Link href="/" className="relative w-[180px] h-[80px] -ml-4">
            <Image src="/logo.png" alt="We Nailed It Media" fill className="object-contain" priority />
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
                className={`font-['Anton'] text-lg tracking-wider ${
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
                  className="font-['Anton'] text-2xl text-black hover:text-black/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 mt-8 border-t border-black/10">
                <div className="flex space-x-4">
                  {Object.entries(socialIcons).map(([name, Icon]) => (
                    <Link 
                      key={name}
                      href={`https://${name}.com/wenaileditmedia`}
                      className="w-10 h-10 border border-black/20 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-black/70 hover:text-black/90 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative pt-20">
        <header className="relative py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative z-10 text-white">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-['Anton'] text-5xl md:text-6xl mb-4"
              >
                PRIVACY POLICY
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-['Gilroy'] text-lg md:text-xl text-white/90"
              >
                Last updated: May 3, 2025
              </motion.p>
            </div>
          </div>
        </header>

        <main className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-12">
                At We Nailed It Media, we take your privacy seriously. This Privacy Policy describes how we collect, use, and handle your personal information.
              </p>

              {privacyContent.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="font-['Anton'] text-2xl mb-4">{section.title}</h2>
                  <p className="text-gray-600">{section.content}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-16"
              >
                <h2 className="font-['Anton'] text-2xl mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about our Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@wenaileditmedia.com" className="text-black hover:underline">
                    privacy@wenaileditmedia.com
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
